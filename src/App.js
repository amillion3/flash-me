import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
  MDBCollapse, MDBNavItem, MDBNavLink
} from "mdbreact";

import './App.scss';

class App extends Component {
  state = {
    collapse: false,
    isWideEnough: false,
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Fragment>
      <Router>
        <MDBNavbar
          color="bg-primary"
          fixed="top"
          dark
          expand="md"
          scrolling
          transparent
        >
          <MDBNavbarBrand to="/home" onClick={this.goTo.bind(this, 'home')}>
            <strong>Flash Me</strong>
          </MDBNavbarBrand>
          {!this.state.isWideEnough && (
            <MDBNavbarToggler onClick={this.onClick} />
          )}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav right>
              {
                isAuthenticated() ?
                <Fragment>
                  <MDBNavItem>
                    <MDBNavLink
                     to="/cardreview"
                     onClick={this.goTo.bind(this, 'cardreview')}
                    >Review Cards</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                     to="/dashboard"
                     onClick={this.goTo.bind(this, 'dashboard')}
                    >Dashboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                    to="/dashboard"
                    onClick={this.logout.bind(this)}
                    >Logout</MDBNavLink>
                  </MDBNavItem>
                </Fragment>
              :
                <MDBNavItem>
                  <MDBNavLink
                  to="/dashboard"
                  onClick={this.login.bind(this)}
                  >Login/Register</MDBNavLink>
                </MDBNavItem>
              }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
      </Fragment>
    );
  }
}

export default App;
