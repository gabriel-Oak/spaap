import React, { Component } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class Slide extends Component {

    render() {
        const images = [
            {
              original: process.env.PUBLIC_URL +'/img/original/a.jpg',
              thumbnail: process.env.PUBLIC_URL +'/img/thumb/a.jpg'
            },
            {
              original: process.env.PUBLIC_URL +'/img/original/b.jpg',
              thumbnail: process.env.PUBLIC_URL +'/img/thumb/b.jpg'
            },
            {
              original: process.env.PUBLIC_URL +'/img/original/c.jpg',
              thumbnail: process.env.PUBLIC_URL +'/img/thumb/c.jpg'
            },
            {
                original: process.env.PUBLIC_URL +'/img/original/d.jpg',
                thumbnail: process.env.PUBLIC_URL +'/img/thumb/d.jpg'
              },
              {
                original: process.env.PUBLIC_URL +'/img/original/e.jpg',
                thumbnail: process.env.PUBLIC_URL +'/img/thumb/e.jpg'
              }
          ]
       
          return (
            <ImageGallery items={images} autoPlay={true} />
          );
    }
}

export default Slide;
