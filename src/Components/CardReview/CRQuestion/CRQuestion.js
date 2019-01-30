import React, { Fragment } from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

import './CRQuestion.scss';

const CRQuestion = () => {
  return (
    <Fragment>
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4 card-rev">What is C#?</h2>
        </MDBContainer>
      </MDBJumbotron>
    </Fragment>
  );
};

export default CRQuestion;
