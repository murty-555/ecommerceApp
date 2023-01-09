import React from 'react'
// import '../../App.css';
import CheckIcon from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const card = () => {
  return (
    
    <div>
    <div className='container-fluid'>
      <div className='row px-xl-5 pb-3'>
      <div className='container col-lg-3 col-md-6 col-sm-12 pb-1 '>
        <div className='d-flex align-items-center justify-content-center border border-dark'>
        <div style={{backgroundColor:"white",padding:"10px 10px",display:"flex", alignItems:"center", margin:"20px" }}>
        <CheckIcon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"23px"}}>
          Quality Product
        </h2>
        </div>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12 '>
      <div className='d-flex align-items-center justify-content-center border'>
      <div style={{backgroundColor:"white",padding:"10px 10px",display:"flex", alignItems:"center", margin:"20px"}}>
        <LocalShippingIcon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"23px"}}>
          Free Shipping
        </h2>
      </div>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12  '>
      <div className='d-flex align-items-center justify-content-center border'>
        <div style={{backgroundColor:"white", padding:"10px 10px",display:"flex", alignItems:"center",margin:"20px"}}>
        <SwapHorizIcon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"23px"}}>
          14-Day Return
        </h2>
      </div>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12'>
      <div className='d-flex align-items-center justify-content-center border'>
        <div style={{backgroundColor:"white", padding:"10px 10px",display:"flex", alignItems:"center",margin:"20px"}}>
        <WifiCalling3Icon style={{color:"#D19C97",width:"58px",height:'40px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"23px"}}>
          24/7 Support
        </h2>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default card;







