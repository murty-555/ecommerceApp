import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";

const dummy = [
  {
    class: "P-R",
    image: "images/offer-1.png",
    text: "Spring Collection",
    order1: "order-0",
    order2: "order-1",
    classRight: "text-cont-right",
  },
  {
    class: "P-L",
    image: "images/offer-2.png",
    text: "Winter Collection",
    order1: "order-1",
    order2: "order-0",
  },
];

const offers = () => {
  return (
    <div className="container-fluid ">
      <div className="row px-xl-5">
        {dummy.map((value, index) => (
          <div className="col-md-6 ">
            <div
              className={`small-container d-flex flex-row justify-content-between ${value.class}`}
              style={{ alignItems: "center" }}
            >
              <img
                className={`girl-image ${value.order1}`}
                alt="girlpic"
                src={value.image}
              ></img>
              <div className={`text-light ${value.order2} ${value.classRight}`}>
                <h4 className="offer">20% OFF THE ALL ORDER</h4>
                <h1 className="card-heading pb-2">{value.text}</h1>
                <Link className="button" to="/shop">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default offers;
