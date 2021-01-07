import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
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
          >
            Get Feedback
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
  };
};

export default connect(mapStateToProps)(Header);
