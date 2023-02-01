import React from "react";
import "./Register.css";
import imageForRegister from "../Images/register-page-image-svg.svg";

function Register({ nameOfClass }) {
  return (
    <>
      <span
        type="button"
        className={nameOfClass}
        data-toggle="modal"
        data-target="#exampleModalCenterForRegister"
      >
        Register
      </span>

      <div
        className="modal fade register-popup-page"
        id="exampleModalCenterForRegister"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterForRegisterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalCenterForRegisterLongTitle"
              >
                Register
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
                <div className="col register-page-form-container">
                  <div className="register-page-icon-container text-center mb-2">
                    <i className="fas fa-users register-page-icon mb-2"></i>
                    <p>Please enter your details to register</p>
                  </div>
                  <form className="register-page-form">
                    <div className="inputs">
                      <input type="text" name="" id="registerName" className="input" placeholder="name"/>
                      {/* <label htmlFor="name" className="input-label">
                        name
                      </label> */}
                    </div>
                    <div className="inputs">
                      <input
                        type="email"
                        name=""
                        id="registerEmail"
                        className="input"
                        placeholder="email"
                      />
                      {/* <label htmlFor="email" className="input-label">
                        email
                      </label> */}
                    </div>
                    <div className="inputs">
                      <input
                        type="text"
                        name=""
                        id="registerUsername"
                        className="input"
                        placeholder="username"
                      />
                      {/* <label htmlFor="username" className="input-label">
                        username
                      </label> */}
                    </div>
                    <div className="inputs">
                      <input
                        type="password"
                        name=""
                        id="registerPassword"
                        className="input"
                        placeholder="password"
                      />
                      {/* <label htmlFor="password" className="input-label">
                        password
                      </label> */}
                    </div>
                    <div className="text-center register-button-container">
                      <button
                        type="button"
                        className="btn register-button text-light"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col d-lg-block d-none register-page-image-container">
                  <img
                    src={imageForRegister}
                    className="register-page-image"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button
                type="button"
                className="btn btn-secondary"
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

export default Register;
