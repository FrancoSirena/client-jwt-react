import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Header.scss';

class Header extends React.Component {
  renderLinks = () => {
    if (this.props.authenticated) {
      return (
        <div>
          <Link  className="nav-link"  to="/my-area">MY AREA</Link>
          <Link  className="nav-link is-logout" to="/logout">LOGOUT</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link  className="nav-link is-signup"  to="/signup">SIGN UP</Link>
          <Link  className="nav-link is-login" to="/login">LOGIN</Link>
        </div>
      )
    }
  }
  render = () => (
    <div className="menu">
      <Link className="nav-link" to="/">HOME</Link>
      {this.renderLinks()}
    </div>
  )
}

const mapStateToProps = (state) => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(Header);