import React from "react";
import Slider from "react-slick";
function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
  };
  return (
    <Slider {...settings} className="my-5">
      <div className="banner-slider">
        <h2>Choose The Best Car</h2>
        <h3 className="my-4">Porsche Mission E</h3>
        <h6> <img src="../../public/images/ri_flashlight-fill.png" alt="" className="d-inline me-3"/>Electric car</h6>
        <img src="../../public/images/Front End Rask.png" alt=""  className="mt-5"/>
      </div>
      <div className="banner-slider">
        <h2>Choose The Best Car</h2>
        <h3 className="my-4">Porsche Mission E</h3>
        <h6> <img src="../../public/images/ri_flashlight-fill.png" alt="" className="d-inline me-3"/>Electric car</h6>
        <img src="../../public/images/Front End Rask.png" alt=""  className="mt-5"/>
      </div>
      <div className="banner-slider">
        <h2>Choose The Best Car</h2>
        <h3 className="my-4">Porsche Mission E</h3>
        <h6> <img src="../../public/images/ri_flashlight-fill.png" alt="" className="d-inline me-3"/>Electric car</h6>
        <img src="../../public/images/Front End Rask.png" alt=""  className="mt-5"/>
      </div>
      <div className="banner-slider">
        <h2>Choose The Best Car</h2>
        <h3 className="my-4">Porsche Mission E</h3>
        <h6> <img src="../../public/images/ri_flashlight-fill.png" alt="" className="d-inline me-3"/>Electric car</h6>
        <img src="../../public/images/Front End Rask.png" alt=""  className="mt-5"/>
      </div>
    </Slider>
  );
}

export default HomeSlider;
