import React, { Component, Fragment } from 'react';

import Dashboard from '../Components/Dashboard/Dashboard';
import CardReview from '../Components/CardReview/CardReview';

import './Home.scss';

class Home extends Component {
  state = {
    authd: false,
    showCardReview: false,
    showDashboard: false,
    showHome: true,
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
              <button onClick={() => this.setState({showCardReview: true})}>show card</button>
              <button onClick={() => this.setState({showDashboard: true})}>show dash</button>
              {
                this.state.showCardReview ?
                  <CardReview></CardReview> : null
              } {
                this.state.showDashboard ?
                <Dashboard></Dashboard> : null
              }
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
