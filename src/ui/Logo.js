import React from "react";
import {Link} from 'react-router-dom'

function Logo() {
  return (
    <Link className="text-decoration-none text-light" to="/">
      <h1 className="display-6 mb-4">
        <span style={{color:"lightsteelblue"}} className="font-weight-bold logo-border px-3 mr-1">
          E
        </span>{" "}
        Shopper
      </h1>
    </Link>
  );
}

export default Logo;
