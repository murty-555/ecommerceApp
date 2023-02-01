import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

import "./TabSection.css";

const TabSection = () => {
  const [toggleContent, setToggleContent] = useState(1);

  const tabHandler = (index) => {
    setToggleContent(index);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center",marginTop:"10px" }}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              className="tab-text text-dark"
              eventKey="link-1"
              onClick={() => tabHandler(1)}
            >
              Description
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="tab-text"
              eventKey="link-2"
              onClick={() => tabHandler(2)}
            >
              Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="tab-text"
              eventKey="link-3"
              onClick={() => tabHandler(3)}
            >
              Reviews (1)
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <div
          className={toggleContent === 1 ? "content active-content" : "content"}
        >
          <div className="col-lg-12">
            <h1 className="tab-content-heading">Product Description</h1>
            <p className="tab-content-text">
              Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
              Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
              diam ea vero et dolore rebum, dolor rebum eirmod consetetur
              invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum
              rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
              Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam
              consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
              nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit
              rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus
              eirmod takimata dolor ea invidunt.
            </p>
            <p className="tab-content-text">
              Dolore magna est eirmod sanctus dolor, amet diam et eirmod et
              ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem
              tempor. Gubergren amet amet labore sadipscing clita clita diam
              clita. Sea amet et sed ipsum lorem elitr et, amet et labore
              voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna
              takimata justo et amet magna et.
            </p>
          </div>
        </div>
        <div
          className={toggleContent === 2 ? "content active-content" : "content"}
        >
          <h1 className="tab-content-heading">Additional Information</h1>
          <p className="tab-content-text">
            Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
            Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam
            ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed
            sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
            Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum
            accusam sadipscing, eos dolores sit no ut diam consetetur duo justo
            est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor
            accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
            tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea
            invidunt.
          </p>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                </li>
                <li className="list-group-item px-0">
                  Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                </li>
                <li className="list-group-item px-0">
                  Duo amet accusam eirmod nonumy stet et et stet eirmod.
                </li>
                <li className="list-group-item px-0">
                  Takimata ea clita labore amet ipsum erat justo voluptua.
                  Nonumy.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                </li>
                <li className="list-group-item px-0">
                  Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                </li>
                <li className="list-group-item px-0">
                  Duo amet accusam eirmod nonumy stet et et stet eirmod.
                </li>
                <li className="list-group-item px-0">
                  Takimata ea clita labore amet ipsum erat justo voluptua.
                  Nonumy.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={toggleContent === 3 ? "content active-content" : "content"}
        >
          <div className="review-container">
            <div className="col-lg-6 col-md-12 col-sm-12 pb-3">
              <h3 className="reviews pt-2">
                1 review for "Colorful Stylish Shirt"
              </h3>
              <div className="d-flex">
                <img
                  src="https://technext.github.io/eshopper/img/user.jpg"
                  className="user-image"
                  alt="user-avatar"
                />
                <div>
                  <h6 className="review-user-name">John Doe - 01 Jan 2045</h6>
                  <p className="comment">
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column col-lg-6 col-md-12 col-sm-12">
              <h1 className="tab-content-heading">Leave a review</h1>
              <p className="note">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="d-flex flex-column">
                <label className="review-text pt-3 ">Your Rating * :</label>
                <label htmlFor="review" className="review-text pt-3 ">
                  Your Review * :
                </label>
                <textarea id="review" className="textarea" />
                <label className="review-text pt-3" htmlFor="name">
                  Your Name *
                </label>
                <input type="text" id="name" className="name-input" />
                <label className="review-text pt-3" htmlFor="email">
                  Your Email *
                </label>
                <input type="text" id="email" className="name-input mb-4" />
                <button className="review-button">Leave Your Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabSection;