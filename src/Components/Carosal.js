import React from "react";
import "./Carosal.css";
const Carosal=()=>{
    return(
        <div class="container-fluid mb-5">
        <div class="row border-top px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a class="btn shadow-none d-flex align-items-center justify-content-between bg-clr text-white w-100" data-toggle="collapse" href="#navbar-vertical">
                    <h6 class="m-0">Categories</h6>
                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                <nav class="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                    <div class="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                        <div class="nav-item dropdown">
                            <a href class="nav-link" data-toggle="dropdown" aria-expanded="false">Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                            <div class="dropdown-menu position-absolute border-0 rounded-0 w-100 m-0">
                                <a href class="dropdown-item">Men's Dresses</a>
                                <a href class="dropdown-item">Women's Dresses</a>
                                <a href class="dropdown-item">Baby's Dresses</a>
                            </div>
                        </div>
                        <a href class="nav-item nav-link">Shirts</a>
                        <a href class="nav-item nav-link">Jeans</a>
                        <a href class="nav-item nav-link">Swimwear</a>
                        <a href class="nav-item nav-link">Sleepwear</a>
                        <a href class="nav-item nav-link">Sportswear</a>
                        <a href class="nav-item nav-link">Jumpsuits</a>
                        <a href class="nav-item nav-link">Blazers</a>
                        <a href class="nav-item nav-link">Jackets</a>
                        <a href class="nav-item nav-link">Shoes</a>
                    </div>
                </nav>
            </div>
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    
                    <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse justify-content-between collapse" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="shop.html" class="nav-item nav-link">Shop</a>
                            <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
                            <div class="nav-item dropdown">
                                <a href class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <div class="navbar-nav ml-auto py-0">
                            <a href class="nav-item nav-link">Login</a>
                            <a href class="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </nav>
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active" style={{height: "410px"}}>
                            <img class="img-fluid" src="https://technext.github.io/eshopper/img/carousel-1.jpg" alt="Image"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{"max-width": "700px"}}>
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href class="btn btn-light text-dark py-2 px-3 ">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" style={{height: "410px",padding:"20px"}}>
                            <img class="img-fluid" src="https://technext.github.io/eshopper/img/carousel-2.jpg" alt="Image"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{"max-width": "700px"}}>
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3 d-md-block">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4 ">Reasonable Price</h3>
                                    <a href class="btn btn-light text-dark py-2 px-3 button ">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Carosal;