import React from "react";

function Register({ nameOfClass }) {
  return (
    <>
      <span
        type="button"
        class={nameOfClass}
        data-toggle="modal"
        data-target="#exampleModalCenterForRegister"
      >
        Register
      </span>

      <div
        class="modal fade"
        id="exampleModalCenterForRegister"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterForRegisterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterForRegisterTitle">
                Register
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="d-flex flex-column text-center">
                <div className="d-flex flex-column">
                  <label className="text-left">Name</label>
                  <input type="text" />
                </div>
                <div className="d-flex flex-column">
                  <label className="text-left">Email</label>
                  <input type="email" />
                </div>
                <div className="d-flex flex-column">
                  <label className="text-left">Username</label>
                  <input type="text" />
                </div>
                <div className="d-flex flex-column">
                  <label className="text-left">Password</label>
                  <input type="password" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
