import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import './App.scss';

class App extends Component {
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

  clickDashboard() {

  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Fragment>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand onClick={this.goTo.bind(this, 'home')} id="navbar-brand"
            >Flash Me</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {
              isAuthenticated() ?
                <Fragment>
                  <NavItem eventKey={3} onClick={this.clickDashboard}
                  >Dashboard</NavItem>
                  <NavItem eventKey={4} onClick={this.logout.bind(this)}
                  >Logout</NavItem>
                </Fragment>
              :
                <Fragment>
                  <NavItem eventKey={1} onClick={this.clickRegister}
                  >Register</NavItem>
                  <NavItem eventKey={1} onClick={this.login.bind(this)}
                  >Login</NavItem>
                </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default App;
