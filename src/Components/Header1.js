import React from "react";
import { Link } from "react-router-dom";
import "./Header1.css";
import Login from "./Login";
import Register from "./Register";
const Header1=()=>{
    
    return(
        <div class="container-fluid header1-container">
        <div class="row border-top px-xl-5">
            <div class="col-lg-3 d-none d-lg-block ">
                <a class="btn shadow-none d-flex align-items-center justify-content-between  text-white w-100 collapsed border-0" data-toggle="collapse" href="#navbar-vertical" style={{height: "65px", "margin-top": "-1px", padding: "0 30px",backgroundColor:"#D19C97", "aria-expanded":"false"}}>
                    <h6 class="m-0">Categories</h6>
                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                <nav class="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-clrr collapse" id="navbar-vertical" style={{width: "calc(100% - 30px)", "z-index": "1"}}>
                    <div class="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                        <div class="nav-item dropdown clr">
                            <a href="#" class="nav-link" data-toggle="dropdown" >Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                            <div class="dropdown-menu position-absolute  border-0 rounded-0 w-100 m-0" style={{"backgroundColor":"#edf1ff"}}>
                                <a href="" class="dropdown-item">Men's Dresses</a>
                                <a href="" class="dropdown-item">Women's Dresses</a>
                                <a href="" class="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href="" class="nav-item nav-link">Shirts</a>
                        <a href="" class="nav-item nav-link">Jeans</a>
                        <a href="" class="nav-item nav-link">Swimwear</a>
                        <a href="" class="nav-item nav-link">Sleepwear</a>
                        <a href="" class="nav-item nav-link">Sportswear</a>
                        <a href="" class="nav-item nav-link">Jumpsuits</a>
                        <a href="" class="nav-item nav-link">Blazers</a>
                        <a href="" class="nav-item nav-link">Jackets</a>
                        <a href="" class="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </div>
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <Link to='/' class="nav-item  nav-link active">Home</Link>
                            <Link to="/shop" class="nav-item nav-link text-dark">Shop</Link>
                            <Link to="/shopDetail" class="nav-item nav-link text-dark">Shop Detail</Link>
                            <div class="nav-item dropdown">
                                <a href="/" class="nav-link dropdown-toggle text-dark" data-toggle="dropdown" aria-expanded="false">Pages</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <Link to="/shoppingCart" class="dropdown-item ">Shopping Cart</Link>
                                    <Link to="/checkout" class="dropdown-item ">Checkout</Link>
                                </div>
                            </div>
                            <Link to="/contact" class="nav-item nav-link text-dark">Contact</Link>
                        </div>
                        <div class="navbar-nav ml-auto py-0">
                        <Login nameOfClass={"nav-item nav-link text-dark"} />
                        <Register nameOfClass={"nav-item nav-link text-dark"} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    
    )
}
export default Header1;