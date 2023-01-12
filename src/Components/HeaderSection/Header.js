import React from "react";
import Header1 from "./Header1";
// import Logo from '../../ui/Logo'

import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const IconList = [
  {
    name: "FAQs",
    href: "https://www.facebook.com/Amazon/",
  },
  {
    name: "Help",
    href: "https://www.facebook.com/Amazon/",
  },
  {
    name: "Support",
    href: "https://www.facebook.com/Amazon/",
  },
];
const IconList2 = [
  {
    name: "fab fa-facebook-f",
    href: "https://www.facebook.com/Amazon/",
  },
  {
    name: "fab fa-twitter",
    href: "https://twitter.com/amazonin",
  },
  {
    name: "fab fa-linkedin-in",
    href: "https://in.linkedin.com/company/amazon",
  },
  {
    name: "fab fa-instagram",
    href: "https://www.instagram.com/amazon/?hl=en",
  },
  {
    name: "fab fa-youtube",
    href: "https://www.youtube.com/user/amazon",
  },
];

const Header = () => {
  const { cartList } = useSelector((state) => ({ ...state.cart }));
  let cart_count = 0;
  cartList.forEach((cartItem) => {
    cart_count += cartItem.quantity;
  });

  return (
    <>
      <div className="container-fluid header-container">
        <div
          className="row  py-2 px-xl-5"
          style={{ backgroundColor: "#232F3E" }}
        >
          <div className="col-lg-6 d-none d-lg-block">
            <div
              className="d-inline-flex align-items-center"
              style={{ textDecoration: "none" }}
            >
              {IconList.map((icon, key) => (
                <a
                  key={key}
                  className="text-light px-2"
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-6  text-lg-right">
            <div className="d-inline-flex align-items-center">
              {IconList2.map((icon1, key) => (
                <a
                  key={key}
                  className="text-light px-2"
                  href={icon1.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={icon1.name}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5 bg-dark">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="/" className="text-decoration-none text-dark">
              <h1 className="h m-0 display-5 text-light">
                <span className="text-primary bg-dark font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-light">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            {/* <a href="/" className="btn border m-2">
                    <i className="fas fa-heart text-light"></i>
                    <span className="badge text-light">0</span>
                </a> */}
            <Link to="/shoppingCart" className="btn border">
              <i className="fas fa-shopping-cart text-light"></i>
              <span className="badge text-light cart-count">{cart_count}</span>
            </Link>
          </div>
        </div>
      </div>
      <Header1 />
    </>
  );
};
export default Header;
