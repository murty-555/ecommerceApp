import React from "react";
import Header from "./Components/Header";
import Carosal from "./Components/Carosal";
import Card from "./Cards";
import ProductList from "./ProductsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Offers from "./Offers";
import Trendy from "./Components/Trendy";
import OwlDemo from "./Components/OwlDemo";
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="App">
      <Header />
      <Carosal />
      <Card />
      <ProductList />
      <Offers />
      <Trendy />
      <OwlDemo />
      <Footer />
      
      
    </div>
  );
}

export default App;
