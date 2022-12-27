import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Style.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Quantity from './Quantity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Style = () => {
    return (
        <div className='container-fluid d-flex'>
            <div className='row'>
                <div className=' col-lg-5 '>
            <div className='car'>
                <div className='back'>
                    <Carousel variant='dark'>
                        <Carousel.Item>
                            <img
                                src="	https://technext.github.io/eshopper/img/product-1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="	https://technext.github.io/eshopper/img/product-2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="	https://technext.github.io/eshopper/img/product-3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="	https://technext.github.io/eshopper/img/product-4.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="	https://technext.github.io/eshopper/img/product-5.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src="	https://technext.github.io/eshopper/img/product-6.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
                </div>
                
            

                <div className='col-lg-7 '>
            <div style={{ marginLeft:'70px',marginTop:'50px'}}>
                <h3>
                    Colorful Stylish Shirt
                </h3>
                <div className='d-flex'>
                    <StarIcon style={{ color: '#D19C97' }} />
                    <StarIcon style={{ color: '#D19C97' }} />
                    <StarIcon style={{ color: '#D19C97' }} />
                    <StarHalfIcon style={{ color: '#D19C97' }} />
                    <StarOutlineIcon style={{ color: '#D19C97' }} />
                    <p className='text'>(50 Reviews)</p>
                </div>
                <h3 style={{marginBottom:'20px'}}> $150.00</h3>
                <p className='text'>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea.
                    Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea 
                    nonumy.Accus labore stet, est lorem sit diam sea et justo,amet at lorem et eirmod
                     ipsum diam et rebum kasd rebum.</p>
                <div className='d-flex'>
                    <h5 style={{paddingTop:'7px',paddingRight:'10px'}}>Sizes:</h5>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group " defaultValue="start">
                                <FormControlLabel value="XS" control={<Radio style={{color:'#D19C97'}}/>} label="XS" labelPlacement='end'/>
                                <FormControlLabel value="S" control={<Radio style={{color:'#D19C97'}}  />} label="S"  labelPlacement='end'/>
                                <FormControlLabel value="M" control={<Radio style={{color:'#D19C97'}}  />} label="M" labelPlacement='end' />
                                <FormControlLabel value="L" control={<Radio style={{color:'#D19C97'}}  />} label="L" labelPlacement='end' />
                                <FormControlLabel value="XL" control={<Radio style={{color:'#D19C97'}}  />} label="XL" labelPlacement='end' />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>

                <div className='d-flex'>
                    <h5 style={{paddingTop:'7px',paddingRight:'10px'}}>Colors:</h5>
                    <div>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group " defaultValue="start">
                                <FormControlLabel value="Black" control={<Radio style={{color:'#D19C97'}}  />} label="Black" labelPlacement='end'/>
                                <FormControlLabel value="White" control={<Radio style={{color:'#D19C97'}}  />} label="White"  labelPlacement='end'/>
                                <FormControlLabel value="Red" control={<Radio style={{color:'#D19C97'}}  />} label="Red" labelPlacement='end' />
                                <FormControlLabel value="Blue" control={<Radio style={{color:'#D19C97'}}  />} label="Blue" labelPlacement='end' />
                                <FormControlLabel value="Green" control={<Radio style={{color:'#D19C97'}}  />} label="Green" labelPlacement='end' />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <div className='d-flex' style={{paddingTop:'15px'}}>
                <Quantity />
                <div className='cart_color d-flex '>
                    <button className='cart_color' style={{borderStyle:'solid',border:'0',paddingRight:'20px'}}>
                        <ShoppingCartIcon/> Add To Cart
                    </button>
                </div>
                </div>
                <div className='d-flex' style={{paddingTop:'20px'}}>
                    <h5 style={{paddingRight:'20px'}}>
                        Share on:
                    </h5>
                    <FacebookIcon style={{marginRight:'10px'}}/>
                    <TwitterIcon style={{marginRight:'10px'}}/>
                    <LinkedInIcon style={{marginRight:'10px'}}/>
                    <PinterestIcon style={{marginRight:'10px'}}/>
                </div>
</div>
</div>
            </div>
            </div>
        
    )
}

export default Style