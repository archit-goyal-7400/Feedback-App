import React from "react";

const Footer = () => {
  return (
    <div style={({ display: "flex" }, { flexDirection: "column" })}>
      <footer className="page-footer">
        <div className="row">
          <div className="col s12 m6 l6 right">
            <a
              className="center"
              href="https://www.facebook.com"
              style={{ marginRight: "18px" }}
            >
              <i className="fab fa-facebook fa-3x"></i>
            </a>
            <a
              className="center"
              href="https://www.facebook.com"
              style={{ marginRight: "18px" }}
            >
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a className="center" href="https://www.facebook.com">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>

          <div className="col right">
            <ul>
              <li>
                <a href="/" className="black-text text-lighten-4 right">
                  Help
                </a>
              </li>
              <li>
                <a href="/" className="black-text text-lighten-4 right">
                  Privacy and Terms
                </a>
              </li>
            </ul>
          </div>
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
