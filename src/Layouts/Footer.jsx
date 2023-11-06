import React, { useState } from "react";
import "./footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {

  return (
    <>
      <footer className="mainfooter position-relative overflow-hidden">
        <img
          src="../../public/images/BG_circle.png"
          alt=""
          className="bg-circle-1 position-absolute"
        />
        <img
          src="../../public/images/BG_circle.png"
          alt=""
          className="bg-circle-2 position-absolute"
        />
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 pe-lg-5">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>
                    {" "}
                    <img src="../../public/images/newlogo.png" alt="" /> Elecar
                  </h4>
                  <p>
                    We offer the best electric cars of the most recognized
                    brands in the world.
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-12">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>Company</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Cars</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-12">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>Information</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Request a quote</a>
                    </li>
                    <li>
                      <a href="#">Find a dealer</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 ps-lg-5">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <BiLogoFacebook />
                  </li>
                  <li>
                    <FaTwitter className="mx-3" />
                  </li>
                  <li>
                    <AiOutlineInstagram />
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-4 copy">
                <p className="text-center">
                  &copy; Bedimcode. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      
      </footer>
    </>
  );
}

export default Footer;
