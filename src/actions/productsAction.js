import axios from "axios";
import { actionTypes } from "./actionTypes/productsActionTypes";
const BASE_URL = "https://fakestoreapi.com/";

const fetchProducts = () => {
  return async function (dispatch) {
    dispatch({
      type: actionTypes.FETCH_PRODUCTS,
    });
    try {
      const response = await axios.get(BASE_URL + "products?limit=8");
      const products = await response.data;
      dispatch({
        type: actionTypes.FETCH_SUCCESS,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_FAILURE,
        payload: "error",
      });
    }
  };
};

export default fetchProducts;