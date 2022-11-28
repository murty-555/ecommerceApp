import React from 'react'
import './App.css';
import CheckIcon from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const card = () => {
  return (
    <div>
    <div className='container'>
      <div className='row'>
      <div className='container col-lg-3 col-md-6 col-sm-12 '>
        <div style={{backgroundColor:"white",border:"2px solid whitesmoke", padding:"20px 20px",display:"flex", alignItems:"center",justifyContent:"center", margin:"20px" }}>
        <CheckIcon style={{color:"#D19C97",width:"36px",height:'36px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"20px"}}>
          Quality Product
        </h2>
        </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12 '>
      <div style={{backgroundColor:"white",border:"2px solid whitesmoke",padding:"20px 20px",display:"flex", alignItems:"center",justifyContent:"center", margin:"20px"}}>
        <LocalShippingIcon style={{color:"#D19C97",width:"36px",height:'36px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"20px"}}>
          Free Shipping
        </h2>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12  '>
        <div style={{backgroundColor:"white",border:"2px solid whitesmoke", padding:"20px 20px",display:"flex", alignItems:"center",justifyContent:"center",margin:"20px"}}>
        <SwapHorizIcon style={{color:"#D19C97",width:"36px",height:'36px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"20px"}}>
          14-Day Return
        </h2>
      </div>
      </div>

      <div className='container col-lg-3 col-md-6 col-sm-12 '>
        <div style={{backgroundColor:"white",border:"2px solid whitesmoke", padding:"20px 20px",display:"flex", alignItems:"center",justifyContent:"center",margin:"20px"}}>
        <WifiCalling3Icon style={{color:"#D19C97",width:"36px",height:'36px'}}/>
        <h2 style={{paddingLeft:"10px",fontSize:"20px"}}>
          24/7 Support
        </h2>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default card;







