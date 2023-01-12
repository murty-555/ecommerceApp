import React, { useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="back-to-top-container">
      <button
        className={show ? "btn back-to-top" : "d-none"}
        onClick={backToTop}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
};

export default BackToTop;
