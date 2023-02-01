import React from "react";
import PageHeader from "../../Components/page-header/PageHeader";
import "./Contactus.css";
const Address = [
  {
    store: "store1",
    street: "123Street, New York, USA",
    mail: "info@example.com",
    Mobileno: "+01234567890",
  },
  {
    store: "store2",
    street: "123Street, New York, USA",
    mail: "info@example.com",
    Mobileno: "+01234567890",
  },
];

const Contactus = () => {
  return (
    <div style={{ backgroundColor: "#eaeded" }} className="contact-us-page">
      <PageHeader headerName={"Contact Us"} />
      <div className="container-fluid pt-5 pb-5">
        <h2 className="decorated">
          <span>Contact For Any Queries</span>
        </h2>
      </div>
      <div className="row px-xl-5 p-3">
        <div className="col-lg-7 mb-5">
          <div className="contact-form">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                  aria-invalid="false"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  rows="6"
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn py-2 px-4 text-light"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 mb-5">
          <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
          <p>
            Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
            duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat
            clita ipsum justo sed.
          </p>
          {Address.map((item, key) => (
            <div key={key} className="d-flex flex-column">
              <h5 className="font-weight-semi-bold mb-3 mt-3">{item.store}</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-dark mr-3"></i>
                {item.street}
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-dark mr-3"></i>
                {item.mail}
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-dark mr-3"></i>
                {item.Mobileno}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
