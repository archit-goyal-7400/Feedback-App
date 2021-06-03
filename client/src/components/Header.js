import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payment";

class Header extends React.Component {
  headerContent() {
    switch (this.props.isAuth) {
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      case null:
        return <li>Loading</li>;
      default:
        return [
          <li key="0">
            <Payment />
          </li>,
          <li key="1" style={{ margin: "0 8px" }}>
            Credits : {this.props.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    // console.log(this.headerContent());
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.isAuth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ marginLeft: "8px" }}
          >
            Feedbacky
          </Link>
          <ul id="nav-mobile" className="right">
            {this.headerContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    credits: state.auth.credits,
  };
};

export default connect(mapStateToProps)(Header);
