import React, { useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import "./Style.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import Quantity from "./Quantity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PinterestIcon from "@mui/icons-material/Pinterest";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fetchShopDetails from "../../actions/ShopDetailAction";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import { cartActionTypes } from "../../actions/actionTypes/cartActionTypes";
const Style = () => {
  const { product, isLoading } = useSelector((state) => ({
    ...state.shopDetail,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const increaseOne = () => {
    setCount((count) => count + 1);
  }

  const decreaseOne = () => {
    setCount((count) => count - 1);
  }

  const addToCartHandler = (product) => {
    dispatch({
      type: cartActionTypes.ADD_TO_CART,
      payload: { ...product, quantity: count },
    });
  };

  useEffect(() => {
    dispatch(fetchShopDetails(id));
  }, [dispatch, id]);


  return (
    <div className="container-fluid d-flex">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row" key={product.id}>
          <div className=" col-lg-4 ">
            {/* <div className="car"> */}
              <div className="back">
                <img src={product.image} alt="img" />
              </div>
            {/* </div> */}
          </div>

          <div className="col-lg-8 ">
            <div style={{ marginLeft: "30px", marginTop: "50px" }}>
              <h3>{product.title}</h3>
              <div className="d-flex align-items-center">
                <DynamicStar
                  rating={product.rating !== undefined && product.rating.rate}
                  width={20}
                  height={20}
                  totalStars={5}
                  outlined={true}
                  outlinedColor={""}
                  fullStarColor={"#ff9900"}
                  emptyStarColor={"transparent"}
                />
                <p className="text mt-3 text-dark ml-2">
                  ({product.rating !== undefined && product.rating.count}{" "}
                  Reviews)
                </p>
              </div>
              <h3 style={{ marginBottom: "20px" }}> ${product.price}.00</h3>
              <p className="text">{product.description}</p>
              <div className="d-flex">
                <h5 style={{ paddingTop: "7px", paddingRight: "10px" }}>
                  Sizes:
                </h5>
                <div>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group "
                      defaultValue="start"
                    >
                      <FormControlLabel
                        value="XS"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="XS"
                        labelPlacement="end"
                        checked
                      />
                      <FormControlLabel
                        value="S"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="S"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="M"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="M"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="L"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="L"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="XL"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="XL"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="d-flex">
                <h5 style={{ paddingTop: "7px", paddingRight: "10px" }}>
                  Colors:
                </h5>
                <div>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group "
                      defaultValue="start"
                    >
                      <FormControlLabel
                        value="Black"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="Black"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="White"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="White"
                        labelPlacement="end"
                        checked
                      />
                      <FormControlLabel
                        value="Red"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="Red"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Blue"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="Blue"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Green"
                        control={<Radio style={{ color: "midnightblue" }} />}
                        label="Green"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="d-flex" style={{ paddingTop: "15px" }}>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={decreaseOne}
                    className="idr-buttons decrease-qty"
                    disabled={count <= 1}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="quantity_er text-center">{count}</span>
                  <button
                    onClick={increaseOne}
                    className="button_PM idr-buttons"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="cart_color d-flex ">
                  <button
                    className="cart_color"
                    onClick={() => {
                      addToCartHandler(product);
                    }}
                    style={{
                      borderStyle: "solid",
                      border: "0",
                      paddingRight: "20px",
                    }}
                  >
                    <ShoppingCartIcon /> Add To Cart
                  </button>
                </div>
              </div>
              {/* <div className="d-flex" style={{ paddingTop: "20px" }}>
                <h5 style={{ paddingRight: "20px" }}>Share on:</h5>
                <FacebookIcon style={{ marginRight: "10px" }} />
                <TwitterIcon style={{ marginRight: "10px" }} />
                <LinkedInIcon style={{ marginRight: "10px" }} />
                <PinterestIcon style={{ marginRight: "10px" }} />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Style;
