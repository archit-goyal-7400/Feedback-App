import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "./testimonial";
import { connect } from "react-redux";

class Landing extends React.Component {
  buttonContent() {
    switch (this.props.isAuth) {
      case false:
        return (
          <a className="btn" href="/auth/google">
            Login With Google
          </a>
        );
      case null:
        return "Loading";
      default:
        return (
          <Link to="/surveys" className="btn">
            Go to Surveys
          </Link>
        );
    }
  }
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    Understand Your Customers Need
                    <span></span>
                  </h1>
                  <p>
                    Collect feedback from people easily and improve your
                    business . We provede one of the best ways to get feedback
                    from your user...
                  </p>
                  {this.buttonContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="testimonials">Testimonials</h1>
        <Testimonial />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Landing);
