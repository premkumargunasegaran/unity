import React from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../../public/images/newlogo.png" alt="" />
            Elecar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <RxHamburgerMenu className="text-white" />
          </button>
          <div
            class="offcanvas offcanvas-top offcanvas-end-md "
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close d-flex justify-content-end align-items-center "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <div className="text-white">
                  <img
                    src="../../public/images/close.png"
                    alt=""
                    className="close"
                  />
                </div>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Popular
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Futured</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
