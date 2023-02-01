import React from "react";
import Logo from "../../ui/Logo";
import BackToTop from "./BackToTop";
import "./Footer.css";
import image from "../Images/payments.png";
import QuickLinks from "./QuickLinks";

function Footer() {
  return (
    <>
      <BackToTop />
      <div className="container-fluid footer-container">
        <div className="px-xl-5">
          <div className="row pt-5">
            <div className="col-lg-4 col-md-12 pr-3 pr-xl-5 mb-5">
              <Logo />
              <p>
                Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
                ipsum no sit erat lorem et magna ipsum dolore amet erat.
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
                  <QuickLinks />
                </div>
                <div className="col-md-4 mb-5">
                  <QuickLinks />
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
                        className="btn border-0 py-3 btn-block text-light"
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
        </div>
        <div className="row border-top border-white botom-bg-color pt-3 px-xl-5 mt-5 pb-3">
          <div className="col-md-6 text-md-left text-center px-xl-0">
            <p className="mb-md-0">
              <a
                className="text-hover font-weight-semi-bold text-decoration-none text-dark distributor"
                href="/"
              >
                &copy; Your Site Name.{" "}
              </a>
              All Rights Reserved. Designed by{" "}
              <a
                className="text-hover font-weight-semi-bold text-decoration-none text-light"
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
    </>
  );
}

export default Footer;
