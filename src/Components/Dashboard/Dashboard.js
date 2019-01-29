import React, { Component, Fragment } from 'react';

import DashReviewSummary from './DashReviewSummary/DashReviewSummary';
import DashItem from './DashItem/DashItem';
import DashWelcomeBack from './DashWelcomeBack/DashWelcomeBack';

import './Dashboard.scss';

class Dashboard extends Component {
  state = {
    showDashItems: true,
    showDashWelcome: false,
    showDashReview: false,
  }

  render() {
    return (
      <Fragment>
        <DashWelcomeBack>
        </DashWelcomeBack>

        <DashReviewSummary>
        </DashReviewSummary>

        <DashItem>
        </DashItem>
      </Fragment>
    );
  }
}

export default Dashboard;
