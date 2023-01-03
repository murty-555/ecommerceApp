import React from "react";

function LoadingSpinner() {
  return (
    <center>
      <div className="spinner-border text-primary d-block mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
}

export default LoadingSpinner;
