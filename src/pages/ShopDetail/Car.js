import React from 'react'
import './Car.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import fetchProducts from '../../actions/productsAction';
import { Link } from 'react-router-dom';
import { cartActionTypes } from '../../actions/actionTypes/cartActionTypes';

const options = {
  margin:30,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },

        594: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 4
        }
    },
};

const Car = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => ({
    ...state.products,
  }));
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    return (
      <div>
      <div className='container-fluid pt-5 pb-5'>
      <h2 className="decorated"><span>You May Like This</span></h2></div>
      <OwlCarousel {...options}>
        {productsList.map((item,key) => (
          <div key={key} className="m-3">
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 innerStyle">
                <img className="img-fluid w-100" src={item.image} alt="" />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{item.title}</h6>
                <div className="d-flex justify-content-center">
                  <h6 className="actualprice">${item.price}</h6>
                  <h6 className="text-muted ml-2">
                    <del>${item.price * 2}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to={`/shop/${item.id}`} className="btn card-features text-dark p-0">
                  <i className="fas fa-eye iconColor mr-1"></i>View Detail
                </Link>
                <button className="btn card-features  text-dark p-0" onClick={() => {
                  dispatch({
                    type: cartActionTypes.ADD_TO_CART,
                    payload: {...item,quantity:1}
                  })
                }}>
                  <i className="fas fa-shopping-cart iconColor mr-1"></i>Add To
                  Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
    )
}

export default Car
