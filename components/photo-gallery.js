import React from "react";
import { render } from 'react-dom';
import firebase from "../lib/firebase";
import ImageGallery from 'react-image-gallery';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = { loadedItems: [] }
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    let currentComponent = this;
    var listRef = firebase.storage().ref().child('gallery');
        return listRef.listAll().then(function(res) {
            var images = [];
            res.items.forEach(function(itemRef) {
                var promise = itemRef.getDownloadURL().then(function(url) {
                    return {original:url,  thumbnail:url};
                }, function(error) {
                    console.error(error);
                });
                images.push(promise);
            });
            return Promise.all(images);
        }, function(error) {
            console.error(error);
        }).then(function(values) { 
            currentComponent.setState({loadedItems: values});
        });
   }

  render() {
    return (
        <ImageGallery items={this.state.loadedItems} />
  );
  }
}
