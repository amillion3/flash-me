import React, { Component, Fragment } from 'react';

import './Home.scss';

class Home extends Component {
  state = {
    authd: false,
  }

  componentDidMount () {
    this.setState({
      authd: this.props.auth.isAuthenticated(),
    });
  };

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
              <h1>Welcome Home</h1>
            </Fragment>
          )
        }

        {
          !isAuthenticated() && (
            <Fragment>
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
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default Home;
