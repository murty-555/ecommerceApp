import React, { useState } from "react";

const InputGroup = () => {
  const [value, setValue] = useState(1);
  const increase = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const decrease = () => {
      setValue((prevValue) => prevValue - 1);
  };
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button onClick={decrease} disabled={value < 1}>
        <i className="fas fa-minus"></i>
      </button>
      <input type="text" className="quantity text-center" value={value} />
      <button onClick={increase}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default InputGroup;
