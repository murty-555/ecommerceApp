import React from "react";
import { Link } from "react-router-dom";
import './PageHeader.css';

function PageHeader({headerName}) {
  return (
    <div className="container-fluid pageHeader">
      <h1>{headerName}</h1>
      <p>
        <Link to="/">Home</Link> <span className="my-2">-</span> {headerName}
      </p>
    </div>
  );
}

export default PageHeader;
