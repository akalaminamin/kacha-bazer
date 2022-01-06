import React from 'react';
// import { Carousel } from 'react-bootstrap';
import img from '../img/1.png';
import img2 from '../img/food.jpg';


const Slider = () => {
    return (
        <div className="container ">
            
            {/* <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-50 h-200"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>one slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-50 h-200"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 h-200"
      src={img}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>last slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block" style={{hight:"200px",width:"800px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block " style={{hight:"200px",width:"800px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block" style={{hight:"200px",width:"800px"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Slider;