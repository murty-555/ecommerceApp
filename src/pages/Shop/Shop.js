import React from "react";
import "./Shop.css";
import Filters from "./Filters";

const Shop=()=>{
  const data = [
    {
      id: 1,
      imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 2,
      imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 3,
      imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 4,
      imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 5,
      imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 6,
      imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 7,
      imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
      id: 8,
      imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
      title: "Colorful Stylish Shirt",
      price: 123,
      cross_price: 123,
    },
    {
    id: 9,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  }
  ];
    return(
        <div>
        <div class="container-fluid mb-5" style={{"backgroundColor":"#edf1ff"}}>
        <div class="d-flex flex-column align-items-center justify-content-center" style={{"min-height": "300px"}}>
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
            <div class="d-inline-flex">
                <p class="m-0 "><a href="" style={{"color":"#D19C97"}}>Home</a></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0">Shop</p>
            </div>
        </div>
        </div>
        
        <div class="container-fluid pt-5">
        <div class="row px-xl-5">
           
            <div class="col-lg-3 col-md-12">
                
               <Filters/>
               
            </div>
            
            <div class="col-lg-9 col-md-12">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search by name"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-transparent text-primary">
                                            <i class="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div class="dropdown ml-4">
                                <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sort by
                                        </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a class="dropdown-item" href="#">Latest</a>
                                    <a class="dropdown-item" href="#">Popularity</a>
                                    <a class="dropdown-item" href="#">Best Rating</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid '>
         <div className="text-center mb-4">
         
         </div>
         <div className="row px-xl-5 pb-3">
         {data.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header inner product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={item.imgSrc} alt="img"/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{item.title}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${item.price}</h6><h6 className="text-muted ml-2"><del>${item.cross_price}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="/" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="/" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
                </div>
         ))}
            </div>
     </div>
                    <div class="col-12 pb-1">
                        <nav aria-label="Page navigation">
                          <ul class="pagination justify-content-center mb-3">
                            <li class="page-item disabled">
                              <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span class="sr-only">Previous</span>
                              </a>
                            </li>
                            <li class="page-item active" style={{"backgroundColor":"#D19C97"}}><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                              <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span class="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    )
}
export default Shop;