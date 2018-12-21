import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class Slide extends Component {

    render() {
        const images = [
            {
              original: '/img/original/a.jpg',
              thumbnail: '/img/thumb/a.jpg',
            },
            {
              original: 'img/original/b.jpg',
              thumbnail: 'img/thumb/b.jpg'
            },
            {
              original: 'img/original/c.jpg',
              thumbnail: 'img/thumb/c.jpg'
            },
            {
                original: 'img/original/d.jpg',
                thumbnail: 'img/thumb/d.jpg'
              },
              {
                original: 'img/original/e.jpg',
                thumbnail: 'img/thumb/e.jpg'
              }
          ]
       
          return (
            <ImageGallery items={images} autoPlay={true} />
          );
    }
}

export default Slide;
