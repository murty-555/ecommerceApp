import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer";
import { loadState } from "./localStorage";

const persistedState = loadState();

const store=createStore(rootReducer,persistedState,applyMiddleware(thunk))
export default store;