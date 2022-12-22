import React from 'react'
import './ShopDetail.css';
import Style from './Style';
import TabSection from './TabSection';
import Car from './Car';
const ShopDetail = () => {
  return (
    <>
    <div className="container-fluid head">
    <h1>SHOP DETAIL</h1>
    <p>
      <a href="/">Home</a> <span className="my-2">-</span> Shop Detail
    </p>
  </div>
        <Style/>
      <TabSection/>
      <Car/>
  </>

  )
}

export default ShopDetail
