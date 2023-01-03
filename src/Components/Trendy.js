import React from 'react'
import './Trendy.css'


export default function Trendy() {
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
      ];
  return (
    <center>
        <div className='container-fluid pt-5'>
         <div className="text-center mb-4">
         
         </div>
         <div className="row px-xl-5 pb-3">
         {data.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
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
        

    <div className='container-fluid pt-5'>
         <div className="text-center mb-4">
         <h2 className="section-title px-5"><span className="px-2">---Just Arrived---</span></h2>
         </div>
         <div className="row px-xl-5 pb-3">
         {data.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
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
    </center>
  )
}
