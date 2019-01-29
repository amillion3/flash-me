import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardGroup,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow
} from "mdbreact";

import "./DashItem.scss";

const DashItem = props => {
  return (
    <MDBContainer>
      <MDBCardGroup deck>
        <MDBRow size={12}>
          <MDBCol>
            <MDBCard className="container-card" >
              <MDBCardBody className="">
                <MDBIcon icon="book-open" size="5x" className="indigo-text"/>
              </MDBCardBody>
              <MDBCardFooter>
                <h1 className="indigo-text">Start Learning</h1>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="container-card" size={6}>
              <MDBCardBody>
                <MDBIcon icon="layer-group"  size="5x" className="indigo-text"/>
              </MDBCardBody>
              <MDBCardFooter>
                <h1 className="indigo-text">Deck Management</h1>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <div className="w-100 card-horiz-spacers"></div>
          <MDBCol>
            <MDBCard className="container-card">
              <MDBCardBody>
                <MDBIcon fab icon="connectdevelop"  size="5x" className="indigo-text"/>
              </MDBCardBody>
              <MDBCardFooter>
                <h1 className="indigo-text">About</h1>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="container-card">
              <MDBCardBody>
                <MDBIcon icon="cogs" size="5x" className="indigo-text"/>
              </MDBCardBody>
              <MDBCardFooter>
                <h1 className="indigo-text">Settings</h1>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default DashItem;
