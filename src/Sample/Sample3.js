import React, { Component, Fragment } from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

import CardReview from '../Components/Main/CardReview/CardReview';
import Sample1 from '../Sample/Sample1';
import Sample2 from '../Sample/Sample2';


class Sample3 extends Component {
  state = {
    showHome: true,
    showDash: false,
    showSample1: false,
    showSample2: false,
  }
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <Fragment>
                <h1>Sample 3</h1>

              </Fragment>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                33333You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Sample3;
