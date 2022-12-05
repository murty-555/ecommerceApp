import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./OwlDemo.css";

const DUMMY_IMAGES = [
  {
    src: "https://technext.github.io/eshopper/img/vendor-1.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-2.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-3.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-4.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-5.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-6.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-7.jpg",
  },
  {
    src: "https://technext.github.io/eshopper/img/vendor-8.jpg",
  },
];
export class OwlDemo extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}></div>
        </div>
        <div class="container-fluid">
          <OwlCarousel items={5} margin={8} autoplay={true}>
            {DUMMY_IMAGES.map((image) => (
              <div className="container owl-container">
                <img className="img" alt="pic1" src={image.src} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default OwlDemo;
