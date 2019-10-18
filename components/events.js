import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const API = 'https://api.meetup.com/dev_night/events?&sign=true&photo-host=public&scroll=future_or_past&page=20&status=';
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       error: null,
       isLoaded: false,
       items: []
     };
  }
  componentDidMount() {
    fetch(API + this.props.status)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    const { error, isLoaded, items } = this.state;
     if (error) {
       return <div>Error while fetching Meetup events: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else if (Object.keys(items).length === 0) {
       return <h3>No upcoming meetups...</h3>;
     } else {
    return (
      <div>
      <h3 className="title">Next upcoming meetups</h3>
        <ul>
          {items.map(item => (
            <li key={item.id}>
            <h5>{item.name}</h5>
                <table>
                 <tbody>
                  <tr>
                   <th>Date</th><td>{item.local_date}</td>
                  </tr>
                  <tr>
                   <th>Time</th><td>{item.local_time}</td>
                  </tr>
                  <tr>
                   <th>Meetup</th>
                   <td><a target="_blank" href={item.link}>{item.link}</a></td>
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
                 { ReactHtmlParser(item.description) }
            </li>
          ))}
        </ul>
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
