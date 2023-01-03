import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    products: productsReducer
})

export default rootReducer;