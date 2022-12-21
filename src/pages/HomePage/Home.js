import React from "react";
import Carosal from "../../Components/Carosal";
import OwlDemo from "../../Components/OwlDemo";
import Trendy from "../../Components/Trendy";
import ProductList from "../../ProductsList";
import Offers from "../../Offers";
import Cards from '../../Cards';

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
