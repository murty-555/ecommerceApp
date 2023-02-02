import React from "react";
import { Link } from "react-router-dom";
import "./Header1.css";
import Login from "../Login&Register/Login";
import Register from "../Login&Register/Register";
import { useDispatch } from "react-redux";
import { loginActionTypes } from "../../actions/actionTypes/loginActionTypes";
const CategoriesList = [
  { name: "Shirts" },
  { name: "Jeans" },
  { name: "Swimwear" },
  { name: "Sleepwear" },
  { name: "Sportswear" },
  { name: "Jumpsuits" },
  { name: "Blazers" },
  { name: "Jackets" },
  { name: "Shoes" },
];
const list2 = [
  { name: "Men's Dresses" },
  { name: "Women's Dresses" },
  { name: "Baby's Dresses" },
];
const Header1 = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
//   console.log(user);
  const logoutHandler = () => {
    dispatch({ type: loginActionTypes.LOGOUT });
    localStorage.removeItem("user");
  };
  return (
    <div
      style={{ backgroundColor: "#eaeded" }}
      className="container-fluid header1-container"
    >
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block ">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between  text-white w-100 collapsed border-0"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{
              height: "65px",
              marginTop: "-1px",
              padding: "0 30px",
              backgroundColor: "lightsteelblue",
              ariaExpanded: "false",
            }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-clrr collapse"
            id="navbar-vertical"
            style={{ width: "calc(100% - 24px)", zIndex: "1" }}
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              <div className="nav-item dropdown clr">
                <a href="/" className="nav-link" data-toggle="dropdown">
                  Dresses <i className="fa fa-angle-down float-right mt-1"></i>
                </a>
                <div
                  className="dropdown-menu position-absolute  border-0 rounded-0 w-100 m-0"
                  style={{ backgroundColor: "#edf1ff" }}
                >
                  {list2.map((item2,key) => (
                    <a key={key} href="/" className="dropdown-item">
                      {item2.name}
                    </a>
                  ))}
                </div>
              </div>
              {CategoriesList.map((item,key) => (
                <a key={key} href="/" className="nav-item nav-link">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="col-lg-9 mt-2">
          <nav className="navbar navbar-expand-lg  navbar-light py-3 py-lg-0 px-0">
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item  nav-link active">
                  Home
                </Link>
                <Link to="/shop" className="nav-item nav-link text-dark">
                  Shop
                </Link>
                <Link to="/shop/1" className="nav-item nav-link text-dark">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle text-dark"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/shoppingCart" className="dropdown-item ">
                      Shopping Cart
                    </Link>
                    <Link to="/checkout" className="dropdown-item ">
                      Checkout
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link text-dark">
                  Contact
                </Link>
              </div>
              {!user ? (
                <div className="navbar-nav ml-auto py-0">
                  <Login nameOfClass={"nav-item nav-link text-dark"} />
                  <Register nameOfClass={"nav-item nav-link text-dark"} />
                </div>
              ) : (
                <div className="navbar-nav ml-auto py-0">
                  <p className="navbar-nav ml-auto py-0 pr-3 welcome-user"><b>Welcome</b></p>
                  <span
                    className="navbar-nav ml-auto py-0 logout-button"
                    onClick={logoutHandler}
                  >
                    Logout
                  </span>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header1;
