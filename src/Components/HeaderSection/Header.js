import React from "react";
import Header1 from "./Header1";
// import Logo from '../../ui/Logo'

import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    const {cartList} = useSelector(state => ({...state.cart}))
    let cart_count = 0;
    cartList.forEach(cartItem => {
        cart_count += cartItem.quantity
    });
    
    return(
        <>
        <div className="container-fluid header-container" >
        <div className="row  py-2 px-xl-5" style={{backgroundColor:"#232F3E"}}>
            <div className="col-lg-6 d-none d-lg-block" >
                <div className="d-inline-flex align-items-center" style={{'text-decoration':"none"}}>
                    <a className="text-light " href="https://reactjs.org/docs/faq-functions.html" target="_blank" rel="noreferrer">FAQs</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-light" href="https://reactjs.org/docs/faq-functions.html" target="_blank" rel="noreferrer">Help</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-light" href="https://reactjs.org/docs/faq-functions.html" target="_blank" rel="noreferrer">Support</a>
                </div>
            </div>
            <div className="col-lg-6  text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-light px-2" href="https://www.facebook.com/Amazon/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-light px-2" href="https://twitter.com/Amazon/" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-light px-2" href="https://in.linkedin.com/company/amazon" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-light px-2" href="https://www.instagram.com/amazon/?hl=en" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-light pl-2"href="https://www.youtube.com/user/amazon" target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5 bg-dark">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="/" className="text-decoration-none text-dark">
                    <h1 className="h m-0 display-5 text-light"><span className="text-primary bg-dark font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
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
                <Link to='/shoppingCart' className="btn border">
                    <i className="fas fa-shopping-cart text-light"></i>
                    <span className="badge text-light cart-count">{cart_count}</span>
                </Link>
            </div>
        </div>
    </div>
    <Header1/>
    </>
    )
}
export default Header;