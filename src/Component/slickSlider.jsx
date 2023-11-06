import React from "react";
import Slider from "react-slick";
import { SlSpeedometer } from "react-icons/sl";
import { BsGraphUpArrow, BsFuelPump } from "react-icons/bs";
export default function slickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mt-5">
      <div>
        {/* card-1  */}
        <div className="p-4 slider-card">
          <img
            src="../../public/images/BG_circle.png"
            alt=""
            className="circle-image"
          />
          <h2>Porsche</h2>
          <p>Turbo S</p>
          <img
            src="../../public/images/brand1.png"
            alt=""
            className="card-car-img"
          />
          <div className="mt-4">
            <div className="d-inline">
              <SlSpeedometer />
              <span className="ms-2 ">3.7 Sec</span>
            </div>
            <div className="ms-3 d-inline">
              <BsGraphUpArrow />
              <span className="ms-2">356 Km/h</span>
            </div>
            <div className="d-block mt-2">
              <BsFuelPump />
              <span className="ms-2">Electric</span>
            </div>
          </div>
          <div className="price mt-4">
            <div>
              <h2 className="font-25">$175,900</h2>
            </div>
          </div>
          <div className="shop-cart">
            <img src="../../public/images/Shop.png" alt="" />
          </div>
        </div>
      </div>
      {/* card-2  */}
      <div>
        <div className="p-4 slider-card">
          <img
            src="../../public/images/BG_circle.png"
            alt=""
            className="circle-image"
          />
          <h2>Porsche</h2>
          <p>Taycan</p>
          <img
            src="../../public/images/Porsche-Taycan 1.png"
            alt=""
            className="card-car-img"
          />
          <div className="mt-4">
            <div className="d-inline">
              <SlSpeedometer />
              <span className="ms-2 ">3.7 Sec</span>
            </div>
            <div className="ms-3 d-inline">
              <BsGraphUpArrow />
              <span className="ms-2">356 Km/h</span>
            </div>
            <div className="d-block mt-2">
              <BsFuelPump />
              <span className="ms-2">Electric</span>
            </div>
          </div>
          <div className="price mt-4">
            <div>
              <h2 className="font-25">$114,900</h2>
            </div>
          </div>
          <div className="shop-cart">
            <img src="../../public/images/Shop.png" alt="" />
          </div>
        </div>
      </div>
      {/* card-3  */}
      <div>
        <div className="p-4 slider-card">
          <img
            src="../../public/images/BG_circle.png"
            alt=""
            className="circle-image"
          />
          <h2>Porsche</h2>
          <p>Turbo S Cross</p>
          <img
            src="../../public/images/brand3.png"
            alt=""
            className="card-car-img"
          />
          <div className="mt-4">
            <div className="d-inline">
              <SlSpeedometer />
              <span className="ms-2 ">3.7 Sec</span>
            </div>
            <div className="ms-3 d-inline">
              <BsGraphUpArrow />
              <span className="ms-2">356 Km/h</span>
            </div>
            <div className="d-block mt-2">
              <BsFuelPump />
              <span className="ms-2">Electric</span>
            </div>
          </div>
          <div className="price mt-4">
            <div>
              <h2 className="font-25">$175,900</h2>
            </div>
          </div>
          <div className="shop-cart">
            <img src="../../public/images/Shop.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        {/* card-1  */}
        <div className="p-4 slider-card">
          <img
            src="../../public/images/BG_circle.png"
            alt=""
            className="circle-image"
          />
          <h2>Porsche</h2>
          <p>Turbo S</p>
          <img
            src="../../public/images/brand1.png"
            alt=""
            className="card-car-img"
          />
          <div className="mt-4">
            <div className="d-inline">
              <SlSpeedometer />
              <span className="ms-2 ">3.7 Sec</span>
            </div>
            <div className="ms-3 d-inline">
              <BsGraphUpArrow />
              <span className="ms-2">356 Km/h</span>
            </div>
            <div className="d-block mt-2">
              <BsFuelPump />
              <span className="ms-2">Electric</span>
            </div>
          </div>
          <div className="price mt-4">
            <div>
              <h2 className="font-25">$175,900</h2>
            </div>
          </div>
          <div className="shop-cart">
            <img src="../../public/images/Shop.png" alt="" />
          </div>
        </div>
      </div>
      {/* card-2  */}
    </Slider>
  );
}
