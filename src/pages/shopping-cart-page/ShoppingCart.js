import React from "react";
import "./ShoppingCart.css";
import PageHeader from "../../Components/page-header/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActionTypes } from "../../actions/actionTypes/cartActionTypes";
import EmptyCart from "./EmptyCart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cartList} = useSelector((state) => ({...state.cart}));

  // const [items, setItems] = useState(cartData);
  let totalCart = 0;
  cartList.forEach(function (carttem) {
    totalCart += (carttem.quantity * carttem.price);
  });

  const shippingCharges = totalCart >= 1 ? 1: 0;

  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  const decreaseQtyHandler = (key) => {
    dispatch({
      type: cartActionTypes.DECREASE_CART_QTY,
      payload: key
    });
  };
  const increaseQtyHandler = (key) => {
    dispatch({
      type: cartActionTypes.INCREASE_CART_QTY,
      payload: key
    });
  };
  const deleteFromCartHandler = (key) => {
    dispatch({
      type: cartActionTypes.DELETE_FROM_CART,
      payload: key
    })
  }

  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  

  // const updateQty = (id, newQty) => {
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, qty: newQty };
  //     }
  //     return item;
  //   });
  //   setItems(newItems);
  // };

  // const grandTotal = items.reduce(
  //   (total, item) => total + item.qty * item.price,
  //   0
  // );
  return (
    <div style={{backgroundColor:"#eaeded"}} className="shoppingCart">
      <PageHeader headerName={"Shopping Cart"} />
      <div className="row container-fluid body mx-0 px-xl-5 pt-5">
        {cartList.length  === 0 && <div className="col-12 col-lg-8 table-container  empty-cart text-center mb-5">
        <div className="d-block">
          <EmptyCart/>
          </div>
        </div>}
        {cartList.length  !== 0 && <div className="col-12 col-lg-8 table-container text-center mb-5">
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
            <tbody className="table-body">
              {cartList.map((item, key) => (
                <tr key={key}>
                  <td className="each-product">
                    <img src={item.image} alt="img" />
                    {item.title}
                  </td>
                  <td className="align-middle">${item.price}</td>
                  <td className="align-middle">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                      className={item.quantity <= 1 ? "decrease-qty" : "idr-buttons"}
                        onClick={() => decreaseQtyHandler(key)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="quantity text-center">
                        {item.quantity}
                      </span>
                      <button className="idr-buttons" onClick={() => increaseQtyHandler(key)}>
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td className="align-middle">
                    ${TotalPrice(item.price, item.quantity)}
                  </td>
                  <td className="align-middle">
                    <button
                      className="idr-buttons remove-item-button"
                      onClick={() =>
                        deleteFromCartHandler(key)
                      }
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
        <div className="col-12 col-lg-4 mb-5">
          <div className="card ">
            <div className="card-header">
              <h5>Cart Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mt-3">
                <h6>Subtotal</h6>
                <h6>${Number(totalCart).toLocaleString("en-US")}</h6>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6>Shipping</h6>
                <h6>${shippingCharges}</h6>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5>${Number(totalCart + shippingCharges).toLocaleString("en-US")}</h5>
              </div>
              <button
                className="btn btn-block checkout-button text-light"
                onClick={navigateToCheckout}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
