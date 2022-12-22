import React from "react";
import Carosal from "../../Components/Carosal";
import OwlDemo from "../../Components/OwlDemo";
import Trendy from "../../Components/Trendy";
import Offers from "../../Components/Offers";
import Cards from '../../Components/Cards';
import ProductList from "../../Components/ProductsList";
const Home = () => {
  return (
    <>
      <Carosal />
      <Cards />
      <ProductList />
      <Offers />
      <Trendy />
      <OwlDemo />
    </>
  );
};

export default Home;
