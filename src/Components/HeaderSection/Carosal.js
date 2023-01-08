import React from "react";
import { Link } from "react-router-dom";
import "./Carosal.css";
const Carosal=()=>{
    
    return(
        <div className="container-fluid car-container mb-5 ml-2">
        <div className="row">
            <div className="col-3 d-none d-lg-block"></div>
                <div id="header-carousel" className=" col-12 col-lg-9 carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style={{height: "410px"}}>
                            <img className="img-fluid auto" src="https://technext.github.io/eshopper/img/carousel-1.jpg" alt="img"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <Link to="/shop" className="btn btn-light text-dark py-2 px-3 " style={{backgroundColor:"white"}}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{height: "410px"}}>
                            <img className="img-fluid" src="https://technext.github.io/eshopper/img/carousel-2.jpg" alt="img"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3 d-md-block">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4 ">Reasonable Price</h3>
                                    <Link to="/shop" className="btn btn-light text-dark py-2 px-3 button  " style={{backgroundColor:"white"}}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        
    )
}
export default Carosal;