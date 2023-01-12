import React from "react";
import "./ShopDetail.css";
import Style from "./Style";
import TabSection from "./TabSection";
import Car from "./Car";
import PageHeader from "../../Components/page-header/PageHeader";
const ShopDetail = () => {
  return (
    <div style={{backgroundColor:"#eaeded"}}>
      <PageHeader headerName={"Shop Detail"}/>
      <Style />
      <TabSection />
      <Car />
    </div>
  );
};

export default ShopDetail;
