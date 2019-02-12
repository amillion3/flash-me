import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalEdit extends Component {

render() {
  const {data} = this.props;
  return (
    <MDBContainer>
      <MDBModal fade={false} isOpen={true}>
        <MDBModalHeader className="blue-grey-text"><strong>Edit Deck</strong></MDBModalHeader>
        <MDBModalBody className="">
          <MDBInput label="Deck Name" size="lg" value={data.name} />
          <MDBInput label="Category" size="lg" value={data.category} />
          <MDBInput label="Public Deck" size="lg" value={data.publicdeck} />
          <MDBInput label="Deck Creator Id" size="lg" value={data.deckcreatorid} disabled/>
          <MDBInput label="Date Created" size="lg" value={data.datecreated} disabled/>
          <MDBInput label="Date Last Modified" size="lg" value={data.datelastmodified} disabled/>
          <MDBInput label="Deck Id" size="lg" value={data.deckid} disabled/>
        </MDBModalBody>
        <MDBModalFooter className="">
          <MDBBtn color="secondary">Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalEdit;