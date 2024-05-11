import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgcaro1 from "../../assets/caroussel/carroussel1.png";
import imgcaro2 from "../../assets/caroussel/carroussel2.png";
import "../../App.css";
function ExampleCarouselImage1() {
  return <img src={imgcaro1} className="d-block w-100" alt="First slide" style={{height:"530px",borderRadius:"20px"}}/>;
}

function ExampleCarouselImage2() {
  return <img src={imgcaro2} className="d-block w-100" alt="Second slide" style={{height:"530px",borderRadius:"20px"}}/>;
}



function ImageSlider() {
  return (
    <div >
      <Carousel style={{maxWidth:"1000px",marginLeft:"250px"}}>
        <Carousel.Item>
          <ExampleCarouselImage1 />
          
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage2 />
          
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default ImageSlider;
