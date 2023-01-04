import React from "react";
import "./ShoppingCart.css";
import PageHeader from "../../Components/page-header/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActionTypes } from "../../actions/actionTypes/cartActionTypes";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);

  // const [items, setItems] = useState(cartData);
  let totalCart = 0;
  items.cartList.forEach(function (item) {
    totalCart += Math.round(item.quantity * item.price);
  });

  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  const decreaseQtyHandler = (item, key) => {
    if (item.quantity === 1) {
      dispatch({
        type: cartActionTypes.DELETE_FROM_CART,
        payload: key,
      });
    } else {
      dispatch({
        type: cartActionTypes.DECREASE_CART_QTY,
        payload: key,
      });
    }
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
  }
  // const subtractOne = (key) => {
  //   dispatch({
  //     type: cartActionTypes.DECREASE_CART_QTY,
  //     payload: key,
  //   });
  // };

  // const addOne = (key) => {
  //   dispatch({
  //     type: cartActionTypes.INCREASE_CART_QTY,
  //     payload: key,
  //   });
  // };

 
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
    <div className="shoppingCart">
      <PageHeader headerName={"Shopping Cart"} />
      <div className="row container-fluid body mx-0 px-xl-5 pt-5">
        <div className="col-12 col-lg-8 table-container text-center mb-5">
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
              {items.cartList.map((item, key) => (
                <tr key={key}>
                  <td>
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
                        onClick={() => decreaseQtyHandler(item,key)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="quantity text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: cartActionTypes.INCREASE_CART_QTY,
                            payload: key,
                          })
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td className="align-middle">
                    ${TotalPrice(item.price, item.quantity)}
                  </td>
                  <td className="align-middle">
                    <button
                      onClick={() =>
                        dispatch({
                          type: cartActionTypes.DELETE_FROM_CART,
                          payload: key,
                        })
                      }
                    >
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
                <h6>${Number(totalCart).toLocaleString("en-US")}</h6>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h6>Shipping</h6>
                <h6>Free</h6>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between mb-3">
                <h5>Total</h5>
                <h5>${Number(totalCart).toLocaleString("en-US")}</h5>
              </div>
              <button className="btn btn-block checkout-button" onClick={navigateToCheckout}>
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
