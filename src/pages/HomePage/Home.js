import React from "react";
import Carosal from "../../Components/HeaderSection/Carosal";
import OwlDemo from "../../Components/OwlCarosle/OwlDemo";
import Trendy from "../../Components/Trendy&Stayupdted&JustArrived/Trendy";
import Offers from "../../Components/Cards&OfferSections/Offers";
import Cards from '../../Components/Cards&OfferSections/Cards';
import ProductList from "../../Components/Cards&OfferSections/ProductsList";
const Home = () => {
  return (
    <div style={{backgroundColor:"#eaeded"}}>
      <Carosal />
      <Cards />
      <ProductList />
      <Offers />
      <Trendy />
      <OwlDemo />
    </div>
  );
};

export default Home;
