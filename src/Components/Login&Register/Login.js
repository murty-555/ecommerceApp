import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./Login.css";
import { useDispatch } from "react-redux";
import imageForLogin from "../Images/login-page-image-svg.svg";
import loginUser from "../../actions/loginAction";

function Login({ nameOfClass }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [detailsNotValid, setDetailsNotValid] = useState(false);
  const [userNotValid, setUserNotValid] = useState(false)
  const [passwordNotValid, setPasswordNotValid] = useState(false)
  const loginHandler = (e) => {
    e.preventDefault();
    if (!userName && !password) {
      setFlag(true);
    } 
    else if(userName === "" && password !== ""){
      setFlag(false);
      setDetailsNotValid(false);
      setUserNotValid(true)
      setPasswordNotValid(false)
    }
    else if(password === "" && userName !== ""){
      setFlag(false);
      setDetailsNotValid(false);
      setUserNotValid(false)
      setPasswordNotValid(true)
    }
    else if(password !== "83r5^_" && userName !== "mor_2314"){
      setFlag(false);
      setDetailsNotValid(true);
      setUserNotValid(false)
      setPasswordNotValid(false)
    }
    else {
      setFlag(false);
      setDetailsNotValid(false);
      setUserNotValid(false);
      setPasswordNotValid(false)
      dispatch(loginUser(userName, password));
      navigate('/')
    }
  };
  // console.log(flag);
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
        tabIndex="-1"
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
                  <img
                    src={imageForLogin}
                    className="login-page-image"
                    alt="img"
                  />
                </div>
                <div className="col login-page-form-container">
                  <div className="login-page-icon-container text-center mb-2">
                    {/* <i className="fas fa-user-circle login-page-icon mb-2"></i> */}
                    <img src="logo.png" alt="logo"/>
                    <p className="login-name mt-3">Login</p>
                  </div>
                  <form className="login-page-form" onSubmit={loginHandler}>
                    <div className="inputs">
                      {/* <label htmlFor="username" className="input-label">username</label> */}
                      <input
                        type="text"
                        name=""
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                        id="loginUsername"
                        className="input"
                        placeholder="username"
                      />
                    </div>
                    <div className="inputs">
                      {/* <label htmlFor="password" className="input-label">password</label> */}
                      <input
                        type="password"
                        name=""
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                        id="loginPassword"
                        className="input"
                        placeholder="password"
                      />
                    </div>
                    {flag && <p className="text-danger">Please enter username and password</p>}
                    {detailsNotValid && <p className="text-danger">Please enter valid credentials</p>}
                    {userNotValid && <p className="text-danger">Please enter username</p>}
                    {passwordNotValid && <p className="text-danger">Please enter password</p>}
                    <div className="text-center login-button-container">
                      <button
                        type="submit"
                        className="btn login-button"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <a href="/" className="forgot-password">
                    Forgot Password?
                  </a>
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

export default Login;
