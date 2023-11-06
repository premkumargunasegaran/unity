import React, { useEffect, useState } from "react";
import Header from "../Layouts/Header";
import "./home.css";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import Slider from "../Component/slickSlider";
import { SlSpeedometer } from "react-icons/sl";
import { BsGraphUpArrow, BsFuelPump } from "react-icons/bs";
import HomeSlider from "../Component/HomeSlider";
import Loader from "../Component/Loader";
import Footer from "../Layouts/Footer";
import { toast } from "react-toastify";

function Home() {
  const [loading, setloading] = useState(true);
  const [title, settitle] = useState(localStorage.getItem("title"));
  const [content, setcontent] = useState(localStorage.getItem("content"));

  useEffect(() => {
    load();
    AOS.init();
  }, [title, content]);

  const load = async () => {
    await setTimeout((resolve, reject) => {
      return setloading(false);
    }, 1000);
  };
  const submithandle = (e) => {
    e.preventDefault();

    if (title && content) {
      localStorage.setItem("title", title);
      localStorage.setItem("content", content);
    } else {
      toast.error("Enter Proper values");
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" ">
          <main>
            <div className="home-section position-relative pb-5">
              <img
                src="../../public/images/BG_circle.png"
                alt=""
                className="bg-circle-1"
              />
              <img
                src="../../public/images/BG_circle.png"
                alt=""
                className="bg-circle-2 position-absolute"
              />
              <Header />

              <div className="container position-relative">
                <HomeSlider />

                <div className=" banner-bottom text-center">
                  <div className="d-flex justify-content-center me-lg-5">
                    <div className="text-center landing-content">
                      <img src="../../public/images/Temp_icon.png" alt="" />
                      <h3 className="my-3">24°</h3>
                      <p>TEMPERATURE</p>
                    </div>
                    <div className="text-center mx-5 landing-content">
                      <h6 className="mt-1">Km</h6>
                      <h3 className="my-3">873</h3>
                      <p>MILEAGE</p>
                    </div>
                    <div className="text-center landing-content ms-4">
                      <img src="../../public/images/Flash.png" alt="" />
                      <h3 className="my-3">94%</h3>
                      <p>BATTERY</p>
                    </div>
                  </div>

                  <img
                    src="../../public/images/Start.png"
                    alt=""
                    className="bounce btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  />
                </div>
              </div>
            </div>

            <section className="future-technology  mt-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 future-technology-col-1 p-0">
                    <img
                      src="../../public/images/Steerin.png"
                      alt=""
                      className="img-fluid w-100"
                      data-aos="fade-right"
                      data-aos-duration="500"
                    />
                    <div
                      className="overlay-div"
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                      <h2>2.500+</h2>
                      <p>Supercharges placed along popular routes</p>
                    </div>
                  </div>
                  <div className="col-md-6 img-col " data-aos="fade-left">
                    <h2>{title ? title : "Mechine With Future Technology"}</h2>
                    <p className="my-4">
                      {content
                        ? content
                        : " See the future with high-performance electric cars produced by renowned brands. They feature futurist builds and designs with new and innovative platforms that last a long time."}
                    </p>

                    <button className="button-animation1 px-4 py-3 mt-4 ">
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-5 car-slider-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <h2 className="text-center py-3">
                      Choose Your Electric Car Of The Porsche Brand
                    </h2>
                    <Slider />
                  </div>
                </div>
              </div>
            </section>
            <section className="py-5 more-future-setion">
              <div className="container">
                <h2 className="text-center">More Features</h2>
                <div className="w-100 text-center position-relative">
                  <img
                    src="../../public/images/mobile.png"
                    alt=""
                    className="img-fluid mobile-visible my-0 mx-auto"
                  />
                  <img
                    src="../../public/images/Car_map.png"
                    alt=""
                    className="img-fluid m-done"
                  />
                  <div
                    className="transperent-card card-1"
                    data-aos="zoom-out-right"
                    data-aos-duration="500"
                  >
                    <h3>800v</h3>
                    <p className="m-0">
                      Turbo <br /> Chargin
                    </p>
                  </div>
                  <div
                    className="transperent-card card-2"
                    data-aos="zoom-out-left"
                    data-aos-duration="1000"
                  >
                    <h3>350</h3>
                    <p className="m-0">
                      Km <br /> Range
                    </p>
                  </div>
                  <div
                    className="transperent-card card-3"
                    data-aos="zoom-out-left"
                    data-aos-duration="1500"
                  >
                    <h3>480</h3>
                    <p className="m-0">
                      Km <br /> Travel
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="future-car-section">
              <div className="container">
                <h2 className="text-center">Featured Luxury Cars</h2>

                <ul
                  className="nav nav-pills mb-3 mt-5 justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <img
                        src="../../public/images/logo3.png"
                        alt=""
                        className="img-fluid tab-img"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <img
                        src="../../public/images/logo2.png"
                        alt=""
                        className="img-fluid tab-img"
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      <img
                        src="../../public/images/logo1.png"
                        alt=""
                        className="img-fluid tab-img"
                      />
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  {/* tab-1  */}
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabindex="0"
                  >
                    <div className="row">
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-1  */}
                          <div className="p-4 slider-card">
                            <h2>Tesla</h2>
                            <p>Model X</p>
                            <img
                              src="../../public/images/featured1.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

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
                      </div>
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-2  */}
                          <div className="p-4 slider-card">
                            <h2>Tesla</h2>
                            <p>Model 3</p>
                            <img
                              src="../../public/images/featured2.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

                            <div className="price mt-4">
                              <div>
                                <h2 className="font-25">$45,900</h2>
                              </div>
                            </div>
                            <div className="shop-cart">
                              <img src="../../public/images/Shop.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-3  */}
                          <div className="p-4 slider-card">
                            <h2>Audi</h2>
                            <p>E-tron</p>
                            <img
                              src="../../public/images/featured3.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

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
                      </div>
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-4  */}
                          <div className="p-4 slider-card">
                            <h2>Porsche</h2>
                            <p>Boxster 987</p>
                            <img
                              src="../../public/images/featured5.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

                            <div className="price mt-4">
                              <div>
                                <h2 className="font-25">$126,900</h2>
                              </div>
                            </div>
                            <div className="shop-cart">
                              <img src="../../public/images/Shop.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-5  */}
                          <div className="p-4 slider-card">
                            <h2>Porsche</h2>
                            <p>Panamera</p>
                            <img
                              src="../../public/images/featured6.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

                            <div className="price mt-4">
                              <div>
                                <h2 className="font-25">$126,900</h2>
                              </div>
                            </div>
                            <div className="shop-cart">
                              <img src="../../public/images/Shop.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tab-2  */}
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabindex="0"
                  >
                    <div className="row">
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-1  */}
                          <div className="p-4 slider-card">
                            <h2>Tesla</h2>
                            <p>Model X</p>
                            <img
                              src="../../public/images/featured1.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

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
                      </div>
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-2  */}
                          <div className="p-4 slider-card">
                            <h2>Tesla</h2>
                            <p>Model 3</p>
                            <img
                              src="../../public/images/featured2.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

                            <div className="price mt-4">
                              <div>
                                <h2 className="font-25">$45,900</h2>
                              </div>
                            </div>
                            <div className="shop-cart">
                              <img src="../../public/images/Shop.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab-3  */}
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabindex="0"
                  >
                    <div className="row">
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-3  */}
                          <div className="p-4 slider-card">
                            <h2>Audi</h2>
                            <p>E-tron</p>
                            <img
                              src="../../public/images/featured3.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

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
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-disabled"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab"
                    tabindex="0"
                  >
                    <div className="row">
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-4  */}
                          <div className="p-4 slider-card">
                            <h2>Porsche</h2>
                            <p>Boxster 987</p>
                            <img
                              src="../../public/images/featured5.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

                            <div className="price mt-4">
                              <div>
                                <h2 className="font-25">$126,900</h2>
                              </div>
                            </div>
                            <div className="shop-cart">
                              <img src="../../public/images/Shop.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 px-4 mt-5 m-center">
                        <div>
                          {/* card-5  */}
                          <div className="p-4 slider-card">
                            <h2>Porsche</h2>
                            <p>Panamera</p>
                            <img
                              src="../../public/images/featured6.png"
                              alt=""
                              className="card-car-img my-4 mx-auto d-block"
                            />

                            <div className="price mt-4">
                              <div>
                                <h2 className="font-25">$126,900</h2>
                              </div>
                            </div>
                            <div className="shop-cart">
                              <img src="../../public/images/Shop.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="newsletter-section py-5 mt-5"
              style={{
                background: `url("../../public/images/Car_bg.png")`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="news-content">
                      <h2>Do You Want To Receive Special Offers?</h2>
                      <p className="mt-5">
                        Be the first to receive all the information about our
                        products and new cars by email by subscribing to our
                        mailing list.
                      </p>
                      <button className="button-animation1 px-4 py-2 mt-4">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex justify-content-end align-items-end">
                    <div>
                      <img
                        src="../../public/images/Car_top.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="brand-section py-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-4 mt-3 col-md-4  col-lg-2 ">
                    <div className="text-center">
                      <img src="../../public/images/logo1.png" alt="" />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mt-3 col-md-4  col-lg-2 ">
                    <div className="text-center">
                      <img src="../../public/images/logo2.png" alt="" />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mt-3 col-md-4  col-lg-2 ">
                    <div className="text-center">
                      <img src="../../public/images/logo3.png" alt="" />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mt-3 col-md-4  col-lg-2 ">
                    <div className="text-center">
                      <img src="../../public/images/logo4.png" alt="" />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mt-3 col-md-4  col-lg-2 ">
                    <div className="text-center">
                      <img src="../../public/images/logo5.png" alt="" />
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mt-3 col-md-4  col-lg-2 ">
                    <div className="text-center">
                      <img src="../../public/images/logo4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          {/* <!-- Modal --> */}
          <div
            className="modal fade contentModal"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <form onSubmit={submithandle}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label color-black"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="title"
                        onChange={(e) => {
                          settitle(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Content
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id=""
                        onChange={(e) => {
                          setcontent(e.target.value);
                        }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
