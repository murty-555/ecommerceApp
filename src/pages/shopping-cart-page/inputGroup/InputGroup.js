import React from "react";

const InputGroup = ({id,qty,updateQty}) => {
  const addOne = () => updateQty(id, qty + 1);
  const subtractOne = () => updateQty(id, qty - 1);
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button onClick={subtractOne} disabled={qty <= 1}>
        <i className="fas fa-minus"></i>
      </button>
      <span className="quantity text-center">{qty}</span>
      <button onClick={addOne}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default InputGroup;
