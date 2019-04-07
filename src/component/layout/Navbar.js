import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../img/WIRED BIM LOGO.png';

// import logo from '../../img/l3.png';
import Popup from '../deals/Popup';

import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: ''
    };
  }

  // To logout implement in the future
  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser();
  }

  togglePopup() {
    this.props.history.push('/analysis-charts');
  }
  
  render() {
    const {isAuthenticated, user} = this.props.auth;
    
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={`/profile/${user.id}`} className="nav-link">
            <span role="img" style={{color:"red"}} aria-label="Good vibes emoji">😀</span> Welcome, {user.name}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" onClick={this.onLogoutClick.bind(this)} className="nav-link"> 
              Logout
          </Link>
        </li>
      </ul>
    );

    
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light btn-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-responsive logo" src={logo} alt="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav"> 
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item nav-link" onClick={this.togglePopup.bind(this)}>
                  {' '}
                  ToolBoox
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/options-upload">
                  {' '}
                  Projects 
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
          
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

// export default withRouter(connect(mapStateToProps, matchDispatchToProps)(ChildView))
export default withRouter(connect(mapStateToProps, {logoutUser})(Navbar));

