import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import firebase from "../lib/firebase";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       x: 0,
       error: null,
       isLoaded: false,
       events: []
     };
  }
  componentDidMount() {
    let currentComponent = this;
    let db = firebase.firestore().collection('events');
    let query = db.where('status', '==', this.props.status).get().then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
    var result = [];
    snapshot.forEach(doc => {
       result.push(doc.data());
    });

   currentComponent.setState({isLoaded: true, events: result});
  })
  .catch(error => {
    currentComponent.setState({isLoaded: true, error});
    console.log('Error getting documents', error);
  });

    //Listen to the change in the firebase document and set the state accordingly
    db.onSnapshot(function(doc) {
        //currentComponent.handleState(doc.data().start_livestream, currentComponent);
    });
  }
  
  render() {
    const { error, isLoaded, events } = this.state;
     if (error) {
       return <div>Error while fetching events: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else if (Object.keys(events).length === 0) {
       return <h3>No {this.props.status} meetups...</h3>;
     } else {
    return (
      <div>
       <Accordion preExpanded={[0]}>
          { events.map(item => (
            <AccordionItem uuid={this.state.x++}> 
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {item.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <table>
                     <tbody>
                      <tr>
                       <th>Date</th><td>{item.date}</td>
                      </tr>
                      <tr>
                       <th>Time</th><td>{item.time}</td>
                      </tr>
                      <tr>
                       <th>Meetup</th>
                       <td><a target="_blank" href={item.meetup_link}>{item.link}</a></td>
                      </tr>
                      <tr>
                       <th>Contact</th><td><a mailto="dev-night@tradebyte.com">dev-night@tradebyte.com</a></td>
                      </tr>
                      <tr>
                       <th>Twitter</th>
                       <td><a target="_blank" href="https://twitter.com/dev_night">@dev_night</a></td>
                      </tr>
                      <tr>
                       <th>Hashtag</th>
                       <td>#devnight</td>
                      </tr>
                      </tbody>
                    </table>
                    {ReactHtmlParser(item.description)}
                </AccordionItemPanel>
            </AccordionItem>
          ))}
           </Accordion>
       <style jsx>{`
          .title {
            text-align: center;
            justify-content: center;
            align-items: center;
          }
        `}</style>
        </div>
      );
   }
 }
}
