import React from "react";
import "./footer.css";
import ArrowIcon from "../../assets/arrow2.png"

const Footer = () => {
  return (
      <div className="footer-wrapper">
          <div className="parent-container">
              <div className="content-container">
                  <div className="column-one">
                      <h1>Let's start creating together</h1>
                      <button className="btn">
                          <span className="btn-text">Let's talk</span>
                          <img className="btn-image" src={ArrowIcon} />
                      </button>
                  </div>
              </div>
              <div className="copyright-container">
                  <p className="copyright-text">
                      2024 Pearl crafted with love❤️
                  </p>
              </div>
          </div>
      </div>
  );
};

export default Footer;
