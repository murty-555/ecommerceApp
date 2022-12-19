import React, { useState } from "react";
import "./ShoppingCart.css";
import cartData from "./cartData/index";
import InputGroup from "./InputGroup";

const ShoppingCart = () => {
  const [items, setItems] = useState(cartData);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0);
  return (
    <div className="shoppingCart">
      <div className="container-fluid head">
        <h1>SHOPPING CART</h1>
        <p>
          <a href="/">Home</a> <span className="my-2">-</span> Shopping Cart
        </p>
      </div>
      <div className="row container-fluid body mx-0 px-xl-5 pt-5">
        <div className="col-12 col-lg-8 text-center mb-5">
          <table className="table table-bordered mb-0">
            <thead className="table-head text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.src}>
                <td>
                  <img src={item.src} alt="img" />
                  {item.name}
                </td>
                <td className="align-middle">${item.price}</td>
                <td className="align-middle">
                  <InputGroup updateQty={updateQty} {...item}/>
                </td>
                <td className="align-middle">${item.price * item.qty}</td>
                <td className="align-middle">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-12 col-lg-4 mb-5">
          <div className="card ">
            <div className="card-header">
              <h5>Cart Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mt-3">
                <h6>Subtotal</h6>
                <h6>${grandTotal}</h6>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6>Shipping</h6>
                <h6>$10</h6>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5>${grandTotal + 10}</h5>
              </div>
              <button className="btn btn-block checkout-button">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
