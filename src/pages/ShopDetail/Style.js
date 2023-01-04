import React from "react";
import "./Style.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import Quantity from "./Quantity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import fetchShopDetails from "../../actions/ShopDetailAction";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import { actionTypes } from "../../actions/actionTypes/cartActionTypes";
const Style = () => {
  const { product, isLoading } = useSelector((state) => ({
    ...state.shopDetail,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();

  const addTocartHandler = (item) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: item,
    });
  };

  useEffect(() => {
    dispatch(fetchShopDetails(id));
  }, [dispatch, id]);

  // const subtractOne = (key) => {
  //   dispatch({
  //     type: actionTypes.DECREASE_CART_QTY,
  //     payload: key
  //   })
  // }

  // const addOne = (key) => {
  //   dispatch({
  //     type: actionTypes.INCREASE_CART_QTY,
  //     payload: key
  //   })
  // }

  return (
    <div className="container-fluid d-flex">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row" key={product.id}>
          <div className=" col-lg-4 ">
            <div className="car">
              <div className="back">
                <img src={product.image} alt="img" />
              </div>
            </div>
          </div>

          <div className="col-lg-8 ">
            <div style={{ marginLeft: "70px", marginTop: "50px" }}>
              <h3>{product.title}</h3>
              <div className="d-flex">
                <StarIcon style={{ color: "#D19C97" }} />
                <StarIcon style={{ color: "#D19C97" }} />
                <StarIcon style={{ color: "#D19C97" }} />
                <StarHalfIcon style={{ color: "#D19C97" }} />
                <StarOutlineIcon style={{ color: "#D19C97" }} />
                <p className="text">(50 Reviews)</p>
              </div>
              <h3 style={{ marginBottom: "20px" }}> ${product.price}.00</h3>
              <p className="text">
                {/* Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr
                  erat diam stet sit clita ea. Sanc invidunt ipsum et, labore
                  clita lorem magna lorem ut. Erat lorem duo dolor no sea
                  nonumy.Accus labore stet, est lorem sit diam sea et justo,amet
                  at lorem et eirmod ipsum diam et rebum kasd rebum. */}
                {product.description}
              </p>
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
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="XS"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="S"
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="S"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="M"
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="M"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="L"
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="L"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="XL"
                        control={<Radio style={{ color: "#D19C97" }} />}
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
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="Black"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="White"
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="White"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Red"
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="Red"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Blue"
                        control={<Radio style={{ color: "#D19C97" }} />}
                        label="Blue"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Green"
                        control={<Radio style={{ color: "#D19C97" }} />}
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
                    // onClick={() => subtractOne(product.id)}
                    className="button_PM"
                    disabled={product.quantity <= 1}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="quantity_er text-center">
                    {/* {product.quantity} */}1
                    </span>
                  <button 
                  // onClick={() => addOne(product.id)}
                  className="button_PM"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="cart_color d-flex ">
                  <button
                    className="cart_color"
                    style={{
                      borderStyle: "solid",
                      border: "0",
                      paddingRight: "20px",
                    }}
                  >
                    <ShoppingCartIcon
                      onClick={() => addTocartHandler(product)}
                    />{" "}
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="d-flex" style={{ paddingTop: "20px" }}>
                <h5 style={{ paddingRight: "20px" }}>Share on:</h5>
                <FacebookIcon style={{ marginRight: "10px" }} />
                <TwitterIcon style={{ marginRight: "10px" }} />
                <LinkedInIcon style={{ marginRight: "10px" }} />
                <PinterestIcon style={{ marginRight: "10px" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Style;
