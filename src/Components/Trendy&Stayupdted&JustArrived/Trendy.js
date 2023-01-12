import React from "react";
import "./Trendy.css";
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
    <>
      <div className="container-fluid pt-5 pb-5">
        <h2 className="decorated">
          <span>Trendy Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {data.map((item, key) => (
          <div key={key} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header inner product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={item.imgSrc} alt="img" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{item.title}</h6>
                <div className="d-flex justify-content-center">
                  <h6>${item.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>${item.cross_price}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href="/" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye trendy-icons mr-1"></i>View Detail
                </a>
                <a href="/" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart trendy-icons mr-1"></i>Add
                  To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-fluid bg-secondary backcolor my-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
          <div className="col-md-6 col-12 py-5">
            <div className="text-center text-light mb-2 pb-2">
              <div className="container-fluid pt-5">
                <h2 className="decorated">
                  <span>Stay Updated</span>
                </h2>
              </div>
              <p>
                Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                diam labore at justo ipsum eirmod duo labore labore.
              </p>
            </div>
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-4"
                  placeholder="Email Goes Here"
                />
                <div className="input-group-append">
                  <button className="btn but btn-dark bg-dark px-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5">
        <h2 className="decorated">
          <span>Just Arrived</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {data.map((item, key) => (
          <div key={key} className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
              <div className="card-header inner product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={item.imgSrc} alt="img" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{item.title}</h6>
                <div className="d-flex justify-content-center">
                  <h6>${item.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>${item.cross_price}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href="/" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye trendy-icons mr-1"></i>View Detail
                </a>
                <a href="/" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart trendy-icons mr-1"></i>Add
                  To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
