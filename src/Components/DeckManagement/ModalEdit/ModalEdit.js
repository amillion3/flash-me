import React, { Component, Fragment } from 'react';
import { MDBContainer, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalEdit extends Component {
  state = {
    deckBeingEdited: {
      deckid: null,
      name: null,
      category: null,
      publicdeck: null,
      deckcreatorid: null,
      datecreated: null,
      datelastmodified: null,
    }
  };

  componentDidMount() {
    this.setState({ deckBeingEdited: this.props.data })
  }

  togglePublicDeck = e => {
    const { name } = e.target;
    this.setState({ [name]: !this.state[name] });
  };

  cancel = () => {
    this.props.callbackShowModal(false);
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

render() {
  const {data} = this.props;
  return (
    <MDBContainer>
      <MDBModal fade={false} isOpen={true}>
        <MDBModalHeader className="blue-grey-text"><strong>Edit Deck</strong></MDBModalHeader>
        <MDBModalBody className="">
          <MDBInput label="Deck Name" size="lg" name="name" value={data.name} />
          <MDBInput label="Category"  name="category" value={data.category} />

          <Fragment>
            <MDBInput label="Public Deck" size="lg" name="publicdeck"  type="checkbox" id="checkbox2" checked={this.state.deckBeingEdited.publicdeck} onChange={this.state.togglePublicDeck}/>
          </Fragment>

          <MDBInput label="Deck Creator Id" size="lg" value={data.deckcreatorid} disabled/>
          <MDBInput label="Date Created" size="lg" value={data.datecreated} disabled/>
          <MDBInput label="Date Last Modified" size="lg" value={data.datelastmodified} disabled/>
          <MDBInput label="Deck Id" size="lg" value={data.deckid} disabled/>
        </MDBModalBody>
        <MDBModalFooter className="">
          <MDBBtn color="secondary" onClick={this.props.callbackShowModal}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalEdit;