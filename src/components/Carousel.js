import React from 'react'
import burger from './burger.jpg'
import momos from './momos.jpg'
import biryani from './biryani.jpg'
export default function Carousel() {
  return (
    <div id="carousel">
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: "500px" }}>

  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={burger} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={momos} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={biryani} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev bg-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next bg-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
