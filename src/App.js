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

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Fragment>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand onClick={this.goTo.bind(this, 'home')} style={{ cursor: 'pointer' }}
            >Flash Me</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {
              isAuthenticated() ?
                <Fragment>
                  <NavItem eventKey={3} onClick={this.goTo.bind(this, 'dashboard')}
                  >Dashboard</NavItem>
                  <NavItem eventKey={4} onClick={this.goTo.bind(this, 'cardreview')}
                  >Review Cards</NavItem>
                  <NavItem eventKey={5} onClick={this.logout.bind(this)}
                  >Logout</NavItem>
                </Fragment>
              :
                <Fragment>
                  <NavItem eventKey={1} onClick={this.login.bind(this)}
                  >Login/Register</NavItem>
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
