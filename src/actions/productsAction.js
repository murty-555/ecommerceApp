import axios from "axios";
import { productsActionTypes } from "./actionTypes/productsActionTypes";
const BASE_URL = "https://fakestoreapi.com/";

const fetchProducts = () => {
  return async function (dispatch) {
    dispatch({
      type: productsActionTypes.FETCH_PRODUCTS,
    });
    try {
      const response = await axios.get(BASE_URL + "products");
      const products = await response.data;
      dispatch({
        type: productsActionTypes.FETCH_SUCCESS,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: productsActionTypes.FETCH_FAILURE,
        payload: "error",
      });
    }
  };
};

export default fetchProducts;