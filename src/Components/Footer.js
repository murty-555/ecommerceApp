import React from "react";
import BackToTop from "./BackToTop";
import "./Footer.css";
import image from "./Images/payments.png";

function Footer() {
  

  return (
    <>
    <BackToTop/>
    <div className="container-fluid footer-container">
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 pr-3 pr-xl-5 mb-5">
            <a className="text-decoration-none" href="/">
              <h1 className="display-6 mb-4 text-dark">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  E
                </span>{" "}
                Shopper
              </h1>
            </a>
            <p>
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt mr-2 address-icons"></i>123
              Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope mr-2 address-icons"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt mr-2 address-icons"></i>+012 345
              67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12 ">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Home
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Our Shop
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Shop Detail
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Shopping Cart
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Checkout
                  </a>
                  <a
                    className="text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold mb-4">Quick Links</h5>
                <div className="d-flex flex-column">
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Home
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Our Shop
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Shop Detail
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Shopping Cart
                  </a>
                  <a
                    className="mb-2 text-hover text-decoration-none text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Checkout
                  </a>
                  <a
                    className="text-decoration-none text-hover text-dark"
                    href="/"
                  >
                    <i className="fa fa-angle-right mr-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="mb-4 font-weight-bold">NewsLetter</h5>
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control border-0 py-3"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control border-0 py-3"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary border-0 py-3 btn-block"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top border-white pt-3 mb-3">
          <div className="col-md-6 text-md-left text-center px-xl-0">
            <p className="mb-md-0">
              <a
                className="text-hover font-weight-semi-bold text-decoration-none text-dark"
                href="/"
              >
                &copy; Your Site Name.{" "}
              </a>
              All Rights Reserved. Designed by{" "}
              <a
                className="text-hover font-weight-semi-bold text-decoration-none text-dark"
                href="/"
              >
                HTML Codex
              </a>
              <br />
              Distributed By{" "}
              <a
                className="distributor text-hover font-weight-semi-bold text-decoration-none"
                href="/"
              >
                Theme Wagon
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
