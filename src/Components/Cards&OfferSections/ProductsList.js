import React from 'react'
import './ProductsList.css'
const App = () => {
  return (
    <center>
    <div>
      <div className='container-fluid pt-5'>
        <div className='row px-xl-5 pb-3'>
          <div className='col-lg-4 col-md-6 col-sm-12 pb-1 '>
            <div className='d-flex flex-column border mb-4 pb-2'>
          <div className='products-container'>
            <p className='product-heading'> 15 Products</p>
            <div className='inner'>
              <img alt="" src={'https://technext.github.io/eshopper/img/cat-1.jpg'} className='size ' />
            </div>
            <h3 className='product-name'>
              Men's Dresses
            </h3>
          </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pb-1 '>
          <div className='d-flex flex-column border mb-4 pb-2'>
          <div className='products-container'>
            <p className='product-heading' > 15 Products</p>
            <div className='inner'>
            <img alt="" src={'https://technext.github.io/eshopper/img/cat-2.jpg'} className='size' />
            </div>
            <h3 className='product-name'>
              Women's Dresses
            </h3>
          </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pb-1 '>
          <div className='d-flex flex-column border mb-4 pb-2'>
          <div className='products-container' >
            <p className='product-heading'> 15 Products</p>
            <div className='inner'>
            <img alt="" src={'https://technext.github.io/eshopper/img/cat-3.jpg'} className='size' />
            </div>
            <h3 className='product-name'>
              Baby's Dresses
            </h3>
          </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pb-1 '>
          <div className='d-flex flex-column border mb-4 pb-2'>
          <div className='products-container' >
            <p className='product-heading'> 15 Products</p>
            <div className='inner'>
            <img alt="" src={'https://technext.github.io/eshopper/img/cat-4.jpg'} className='size' />
            </div>
            <h3 className='product-name'>
              Accerssories
            </h3>
          </div>
          </div>
          </div >
          <div className='col-lg-4 col-md-6 col-sm-12 pb-1 '>
          <div className='d-flex flex-column border mb-4 pb-2'>
          <div className='products-container' >
            <p className='product-heading'> 15 Products</p>
            <div  className='inner'>
            <img alt="" src={'https://technext.github.io/eshopper/img/cat-5.jpg'} className='size' />
            </div>
            <h3 className='product-name'>
              Bags
            </h3>
          </div>
          </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 pb-1 '>
          <div className='d-flex flex-column border mb-4 pb-2'>
          <div className='products-container' >
            <p className='product-heading'> 15 Products</p>
            <div className='inner'>
            <img alt="" src={'https://technext.github.io/eshopper/img/cat-6.jpg'} className='size' />
            </div>
            <h3 className='product-name'>
              Shoes
            </h3>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </center>


  )
}

export default App