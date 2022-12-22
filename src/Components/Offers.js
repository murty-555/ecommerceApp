import React from 'react'
import './Offers.css';
const offers = () => {
  return (
    <div className='container-fluid '>
            <div className='row px-xl-5'>
                <div className='col-md-6 '>
                    <div className='small-container P-R d-flex flex-row justify-content-between' style={{alignItems:'center'}}>
                        <img className='girl-image' alt="girlpic" src={'images/offer-1.png'}></img>
                        <div className=' text-cont-right'>
                            <h4 className='offer'>20% OFF THE ALL ORDER</h4>
                            <h1 className='card-heading'>Spring Collection</h1>
                            <a className='button' href="@" >Shop Now</a>
                        </div>
                    </div>  
                </div>
                <div className='col-md-6 '>
                    <div className='small-container P-L d-flex flex-row justify-content-between' style={{alignItems:'center'}}>
                        <div>
                            <h4 className='offer'>20% OFF THE ALL ORDER</h4>
                            <h1 className='card-heading'>Winter Collection</h1>
                            <a className='button' href="@" >Shop Now</a>
                        </div>
                        <img className='girl-image' alt="girlpic" src={'images/offer-2.png'}></img>    
                    </div>  
                </div> 
            </div>    
        </div>
  )
}

export default offers



