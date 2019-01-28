import React, { Component, Fragment } from 'react';

import Main from '../Components/Main/Main';
import Dashboard from '../Components/Dashboard/Dashboard';
import CardReview from '../Components/CardReview/CardReview';

import './Home.scss';

class Home extends Component {
  state = {
    showMain: true,
    showDash: false,
    showCardReview: false,
    authd: false,
  }

  componentDidMount () {
    console.log(this.props);
    this.setState({
      authd: this.props.auth.isAuthenticated,
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
              {this.state.showMain ?
              <Main></Main>
              : null
              }

              {this.state.showDash ?
              <Dashboard></Dashboard>
              : null
              }

              {this.state.showCardReview ?
              <CardReview></CardReview>
              : null
              }
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
