import React from "react"
import ImageGallery from 'react-image-gallery';
import Slide1 from "../../../assets/images/slide1.jpg"
import Slide2 from "../../../assets/images/slide2.jpg"
import Slide3 from "../../../assets/images/slide3.jpg"


const images = [
  {
    original: Slide1,
    thumbnail: Slide1,
  },
  {
    original: Slide2,
    thumbnail: Slide2,
  },
  {
    original: Slide3,
    thumbnail: Slide3,
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}