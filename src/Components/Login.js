import React from "react";
import "./Login.css";
import imageForLogin from "./Images/login-page-image-svg.svg";

function Login({ nameOfClass }) {
  return (
    <>
      <span
        type="button"
        className={nameOfClass}
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Login
      </span>

      <div
        className="modal fade login-popup-page"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col d-md-block d-none login-page-image-container">
                  <img src={imageForLogin} className="login-page-image" alt="img" />
                </div>
                <div className="col login-page-form-container">
                  <div className="login-page-icon-container text-center mb-2">
                    <i className="fas fa-user-circle login-page-icon mb-2"></i>
                    <p>Please enter your details to login</p>
                  </div>
                  <form className="login-page-form">
                    {/* <div className="d-flex flex-column mb-2">
                      <label>username</label>
                      <input type="text" />
                    </div> */}
                    <div className="inputs">
                      <input type="text" name="" id="username" className="input"/>
                      <label htmlFor="username" className="input-label">username</label>
                    </div>
                    <div className="inputs">
                      <input type="password" name="" id="password" className="input"/>
                      <label htmlFor="password" className="input-label">password</label>
                    </div>
                    {/* <div className="d-flex flex-column mb-2">
                      <label>password</label>
                      <input type="password" />
                    </div> */}
                    <div className="text-center login-button-container">
                    <button
                      type="button"
                      className="btn btn-primary login-button"
                    >
                      Login
                    </button>
                    </div>
                    
                  </form>
                  <a href="/" className="forgot-password">Forgot Password?</a>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
