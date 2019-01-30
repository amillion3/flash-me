import React from "react";
import { MDBBtn, MDBCol, MDBRow } from "mdbreact";

import "./CRRatingContainer.scss";

const BtnGroupPage = () => {
  return (
    <MDBRow className="row-rating-container">
      <MDBCol size="1" />

      <MDBCol size="2" className="col-button-rating-container center-block">
        <MDBBtn color="mdb-color lighten-2" className="col-rating" id="rating1">
          1
        </MDBBtn>
      </MDBCol>
      <MDBCol size="2" className="col-button-rating-container center-block">
        <MDBBtn color="indigo lighten-2" className="col-rating" id="rating2">
          2
        </MDBBtn>
      </MDBCol>
      <MDBCol size="2" className="col-button-rating-container center-block">
        <MDBBtn color="blue lighten-2" className="col-rating" id="rating3">
          3
        </MDBBtn>
      </MDBCol>
      <MDBCol size="2" className="col-button-rating-container center-block">
        <MDBBtn
          color="light-blue lighten-2"
          className="col-rating"
          id="rating4"
        >
          4
        </MDBBtn>
      </MDBCol>
      <MDBCol size="2" className="col-button-rating-container center-block">
        <MDBBtn color="cyan lighten-2" className="col-rating" id="rating5">
          5
        </MDBBtn>
      </MDBCol>

      <MDBCol size="1" />
    </MDBRow>
  );
};

export default BtnGroupPage;
