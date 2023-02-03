import React from "react";
import { Link } from "react-router-dom";
import "./Carosal.css";
const carosalList = [
  {
    src: "https://technext.github.io/eshopper/img/carousel-1.jpg",
    p: "10% Off Your First Order",
    className: "carousel-item active",
    cname: "Fashionable Dress",
    button: "Shop Now",
    alt: "Image",
  },
  {
    src: "https://technext.github.io/eshopper/img/carousel-2.jpg",
    p: "10% Off Your First Order",
    className: "carousel-item",
    cname: "Reasionable Price",
    button: "Shop Now",
    alt: "Image",
  },
];
const Carosal = () => {
  return (
    <div className="container-fluid car-container mb-5 ml-2">
      <div className="row">
        <div className="col-3 d-none d-lg-block"></div>
        <div
          id="header-carousel"
          className=" col-12 col-lg-9 carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {carosalList.map((item, key) => (
              <div
                key={key}
                className={item.className}
                style={{ height: "410px" }}
              >
                <img
                  className="img-fluid auto"
                  src={item.src}
                  alt="img"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      {item.p}
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      {item.cname}
                    </h3>
                    <Link
                      to="/shop"
                      className="btn btn-light text-dark py-2 px-3 "
                      style={{ backgroundColor: "white" }}
                    >
                      {item.button}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Carosal;
