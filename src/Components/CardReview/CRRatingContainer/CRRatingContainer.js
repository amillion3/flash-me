import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBRow } from "mdbreact";

import "./CRRatingContainer.scss";

class BtnGroupPage extends Component {

  btnClicked = e => {
    this.props.callbackFromCardReview(e.target.id);
    console.log("Button rating clicked", e.target.id);
  }

  render() {

    return (
      <MDBRow className="row-rating-container">
        <MDBCol size="1" /> {/* Empty col */}
        <MDBCol size="2" className="col-button-rating-container center-block">
          <MDBBtn
            color="mdb-color lighten-2"
            className="col-rating"
            id="rating1"
            onClick={this.btnClicked} >
              1
          </MDBBtn>
        </MDBCol>
        <MDBCol size="2" className="col-button-rating-container center-block">
          <MDBBtn
            color="indigo lighten-2"
            className="col-rating"
            id="rating2"
            onClick={this.btnClicked} >
              2
          </MDBBtn>
        </MDBCol>
        <MDBCol size="2" className="col-button-rating-container center-block">
          <MDBBtn
            color="blue lighten-2"
            className="col-rating"
            id="rating3"
            onClick={this.btnClicked} >
              3
          </MDBBtn>
        </MDBCol>
        <MDBCol size="2" className="col-button-rating-container center-block">
          <MDBBtn
            color="light-blue lighten-2"
            className="col-rating"
            id="rating4"
            onClick={this.btnClicked} >
              4
          </MDBBtn>
        </MDBCol>
        <MDBCol size="2" className="col-button-rating-container center-block">
          <MDBBtn
            color="cyan lighten-2"
            className="col-rating"
            id="rating5"
            onClick={this.btnClicked} >
              5
          </MDBBtn>
        </MDBCol>
        <MDBCol size="1" /> {/* Empty col */}
      </MDBRow>
    );
  }
};

export default BtnGroupPage;
