import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

import './ButtonCardRating.scss';

const ButtonCardRating = () => {
  return (
    <Fragment>
      <MDBBtn
        color="primary"
        id={this.props.rating} >
        {this.props.rating}
      </MDBBtn>
    </Fragment>
  );
};

export default ButtonCardRating;
