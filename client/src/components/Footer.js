import React from "react";

const Footer = () => {
  return (
    <div style={({ display: "flex" }, { flexDirection: "column" })}>
      <footer className="page-footer">
        <div
          className="row"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <a
            className="center"
            href="https://www.facebook.com"
            style={{ margin: "18px" }}
          >
            <i className="fab fa-facebook fa-3x"></i>
          </a>
          <a
            className="center"
            href="https://www.facebook.com"
            style={{ margin: "18px" }}
          >
            <i className="fab fa-twitter fa-3x"></i>
          </a>
          <a
            className="center"
            href="https://www.facebook.com"
            style={{ margin: "18px" }}
          >
            <i className="fab fa-instagram fa-3x"></i>
          </a>
        </div>

        <div className="footer-copyright">
          <div className="container">
            &#169; 2021 Copyright Information
            <a className="grey-text text-lighten-4 right" href="/">
              Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
