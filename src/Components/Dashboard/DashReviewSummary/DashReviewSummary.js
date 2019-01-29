import React, {Fragment} from "react";

import "./DashReviewSummary.scss";

const DashReviewSummary = props => {
  return (
    <Fragment>
      <p className="h3 subtext-dashboard">You need to review 3 cards from your C# deck and 9 cards from your Interviewing deck.</p>
    </Fragment>
  );
};

export default DashReviewSummary;
