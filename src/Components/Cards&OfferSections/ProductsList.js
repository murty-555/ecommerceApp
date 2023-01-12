import React from "react";
import "./ProductsList.css";
const ProductList = () => {
  const data = [
    {
      id: 1,
      imgSrc: "https://technext.github.io/eshopper/img/cat-1.jpg",
      title: "Men's Dresses",
    },
    {
      id: 2,
      imgSrc: "https://technext.github.io/eshopper/img/cat-2.jpg",
      title: "Women's Dresses",
    },
    {
      id: 3,
      imgSrc: "https://technext.github.io/eshopper/img/cat-3.jpg",
      title: "Baby's Dresses",
    },
    {
      id: 4,
      imgSrc: "https://technext.github.io/eshopper/img/cat-4.jpg",
      title: "Accerssories",
    },
    {
      id: 5,
      imgSrc: "https://technext.github.io/eshopper/img/cat-5.jpg",
      title: "Bags",
    },
    {
      id: 6,
      imgSrc: "https://technext.github.io/eshopper/img/cat-6.jpg",
      title: "Shoes",
    },
  ];
  return (
    <center>
      <div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            {data.map((item, key) => (
              <div key={key} className="col-lg-4 col-md-6 col-sm-12 pb-1 ">
                <div className="d-flex flex-column border mb-4 pb-2">
                  <div className="products-container">
                    <p className="product-heading"> 15 Products</p>
                    <div className="inner">
                      <img alt="" src={item.imgSrc} className="size " />
                    </div>
                    <h3 className="product-name">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </center>
  );
};

export default ProductList;
