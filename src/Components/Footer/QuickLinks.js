import React from "react";
import { Link } from "react-router-dom";

const LINKS_DATA = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/shop",
    text: "Our Shop",
  },
  {
    to: "/shop/1",
    text: "Shop Detail",
  },
  {
    to: "/shoppingCart",
    text: "Shopping Cart",
  },
  {
    to: "/checkout",
    text: "Checkout",
  },
  {
    to: "/contact",
    text: "Contact Us",
  },
];

function QuickLinks() {
  return (
    <>
      <h5 className="font-weight-bold mb-4">Quick Links</h5>
      <div className="d-flex flex-column justify-content-start">
        {LINKS_DATA.map((data, key) => (
          <Link
            key={key}
            className="mb-2 text-hover text-decoration-none text-light"
            to={data.to}
          >
            <i className="fa fa-angle-right mr-2"></i>
            {data.text}
          </Link>
        ))}
      </div>
    </>
  );
}

export default QuickLinks;
