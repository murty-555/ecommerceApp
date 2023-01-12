import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderSection/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/home/Home";
import Shop from './pages/shop/Shop';
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import Checkout from './pages/checkout/Checkout';
import Contactus from './pages/contact/Contactus';
import ShopDetail from "./pages/shop-detail/ShopDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/shop" element={<Shop/>}></Route>
        <Route exact path="/shop/:id" element={<ShopDetail/>}></Route>
        <Route exact path="/shoppingCart" element={<ShoppingCart/>}></Route>
        <Route exact path="/checkout" element={<Checkout/>}></Route>
        <Route exact path="/contact" element={<Contactus/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
