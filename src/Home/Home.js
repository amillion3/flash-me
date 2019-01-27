import React, { Component, Fragment } from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

import CardReview from '../Components/Main/CardReview/CardReview';
import Sample1 from '../Sample/Sample1';
import Sample2 from '../Sample/Sample2';


class Home extends Component {
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
                <Navbar>
                <NavItem onClick={() => this.setState({showSample1: true})}>sample1</NavItem>
                <NavItem href="/sample2">sample2</NavItem>
                <NavItem href="#">ghi</NavItem>
                </Navbar>
                {this.state.showSample1 ?
                  <Sample1></Sample1>
                : null
                }
                {this.state.showSample2 ?
                  <Sample2></Sample2>
                : null
                }

                <CardReview>
                <h4>
                  You are logged in!
                </h4>

                </CardReview>

              </Fragment>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
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

export default Home;
