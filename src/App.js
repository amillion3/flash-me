import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,
  MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView, MDBContainer
} from "mdbreact";

import './App.scss';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     collapse: false,
  //     isWideEnough: false
  //   };
  //   this.onClick = this.onClick.bind(this);
  // }
  state = {
    collapse: false,
    isWideEnough: false,
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
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
                  <MDBNavItem active>
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
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
        <MDBMask
          overlay="purple-light"
          className="flex-center flex-column text-white text-center"
          >
          <h2>This Navbar is fixed</h2>
          <h5>
            It will always stay visible on the top, even when you scroll
            down
          </h5>
          <p>
            Navbar's background will switch from transparent to solid color
            while scrolling down
          </p>
          <br />
          <p>
            Full page intro with background image will be always displayed
            in full screen mode, regardless of device
          </p>
        </MDBMask>
      </MDBView>
      <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </Fragment>
    );
  }
}

export default App;
