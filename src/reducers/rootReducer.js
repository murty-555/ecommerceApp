import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer";
import productsReducer from "./productsReducer";
import shopDetailsReducer from "./shopDetailReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    products: productsReducer,
    shopDetail: shopDetailsReducer,
    cart:cartReducer
})

export default rootReducer;