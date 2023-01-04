import axios from "axios";
import { shopDetailActionTypes } from "./actionTypes/shopDetailActionTypes";
const BASE_URL = "https://fakestoreapi.com/";

const fetchShopDetails = (id) => {
  return async function (dispatch) {
    dispatch({
      type: shopDetailActionTypes.SHOP_DETAILS_FETCH,
    });
    try {
      const response = await axios.get(`${BASE_URL}products/${id}`);
      const productDetails = await response.data;
      dispatch({
        type: shopDetailActionTypes.SHOP_DETAILS_FETCH_SUCCESS,
        payload: productDetails,
      });
    } catch (error) {
      dispatch({
        type: shopDetailActionTypes.SHOP_DETAILS_FETCH_FAILURE,
        payload: "error",
      });
    }
  };
};

export default fetchShopDetails;