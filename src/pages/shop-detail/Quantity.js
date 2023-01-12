import React,{useState} from 'react'
import './Quantity.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Quantity = () => {
    const [value, setValue] = useState(1);
  const increase = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const decrease = () => {
    if (value !== 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button className='button_PM' onClick={decrease} disabled={value <= 1}>
        <RemoveIcon/>
      </button>
      <span type="text" className="quantity_er text-center">{value}</span>
      <button onClick={increase} className='button_PM'>
        <AddIcon/>
      </button>
    </div>
  )
}

export default Quantity
