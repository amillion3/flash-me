import React, { Fragment } from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

import './CRAnswer.scss';

const CRAnswer = () => {
  return (
    <Fragment>
      <MDBJumbotron fluid>
        <MDBContainer>
          <h3 className="display-4 card-rev">C# is a general purpose, object oriented programming language.</h3>
        </MDBContainer>
      </MDBJumbotron>
    </Fragment>
  );
};

export default CRAnswer;
