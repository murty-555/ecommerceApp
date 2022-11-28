
import React from 'react';
import Header from './Components/Header';
import Carosal from './Components/Carosal';
import Card from './Cards'
import ProductList from'./ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers from './Offers';
import Trendy from './Components/Trendy';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carosal/>
      <Card/>
      <ProductList/>
      <Offers/>
      <Trendy/>
     </div>
  );
}

export default App;
