import React from "react";
import firebase from "../lib/firebase";
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {showLivestream: false};
  }

  componentDidMount() {
    let currentComponent = this;
    let db = firebase.firestore().collection('config').doc("CIZUKewI7NHwweQ3ZqZo");
    db.get().then(function(doc) {
        if (doc.exists) {
            currentComponent.handleState(doc.data().start_livestream, currentComponent);
        }
    }).catch(function(error) {
        console.log("Error getting config timestamp:", error);
    });

    //Listen to the change in the firebase document and set the state accordingly
    db.onSnapshot(function(doc) {
        currentComponent.handleState(doc.data().start_livestream, currentComponent);
    });
  }

  //Set the state to switch the liveStream on / off
  handleState(startDate, currentComponent) {
    const current = new Date();
    const start = new Date(startDate);
    if (start.getTime() <= current.getTime()) {
        currentComponent.setState({showLivestream: true});
    } else {
        currentComponent.setState({showLivestream: false});
    }
  }

  render() {
    const isLivestream = this.state.showLivestream;
    let iframe;
    if (isLivestream) {
        iframe = <iframe id='ls_embed_1539691978'
                         src='https://livestream.com/accounts/23776270/events/8406262/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false'
                         width='816'
                         height='440'
                         frameBorder='0'
                         scrolling='no'
                         allowFullScreen>
                </iframe>
    } else {
        iframe = '';
    }
    return (
        <div className="liveStream">
         {iframe}
        <style jsx>{`
          .liveStream {
            text-align: center;
            justify-content: center;
            align-items: center;
          }
        `}</style>
        </div>
  );
  }
}
