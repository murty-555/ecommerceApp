import React from 'react'
import { Link } from 'react-router-dom';
import './Offers.css';
const offers = () => {
  return (
    <div className='container-fluid '>
            <div className='row px-xl-5'>
                <div className='col-md-6 '>
                    <div className='small-container P-R d-flex flex-row justify-content-between' style={{alignItems:'center'}}>
                        <img className='girl-image' alt="girlpic" src={'images/offer-1.png'}></img>
                        <div className=' text-cont-right text-light'>
                            <h4 className='offer'>20% OFF THE ALL ORDER</h4>
                            <h1 className='card-heading pb-2'>Spring Collection</h1>
                            <Link className='button' to="/shop" >Shop Now</Link>
                        </div>
                    </div>  
                </div>
                <div className='col-md-6 '>
                    <div className='small-container P-L d-flex flex-row justify-content-between' style={{alignItems:'center'}}>
                        <div className='text-light'>
                            <h4 className='offer'>20% OFF THE ALL ORDER</h4>
                            <h1 className='card-heading w-100 pb-2'>Winter Collection</h1>
                            <Link className='button' to="/shop" >Shop Now</Link>
                        </div>
                        <img className='girl-image' alt="girlpic" src={'images/offer-2.png'}></img>    
                    </div>  
                </div> 
            </div>    
        </div>
  )
}

export default offers



