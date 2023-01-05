import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import throttle from 'lodash/throttle'
import { saveState } from "./localStorage";

store.subscribe(throttle(() => {
  console.debug('saveState')
  const { cart } = store.getState()
  saveState({
    cart
  })
}, 1000))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);
