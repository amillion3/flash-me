import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import DecksRequest from '../../../Requests/Decks';

class ModalDeckEdit extends Component {
  state = {
    deckBeingEdited: {
      deckid: '',
      name: '',
      category: '',
      publicdeck: false,
      deckcreatorid: '',
      datecreated: '',
      datelastmodified: '',
    },
    value: '',
  };

  componentDidMount() {
    this.setState({
      deckBeingEdited: this.props.data,
     })
  }

  togglePublicDeck = e => {
    this.setState({
      deckBeingEdited : {
        publicdeck: !this.state.publicdeck,
      }
    });
  };

  clickDelete = () => {
    console.log('delete', this.state.deckBeingEdited.deckid);
    return new Promise((resolve, reject) => {
      DecksRequest.DeleteDeck(this.state.deckBeingEdited.deckid)
      .then(a => {
        console.log(a);
        return a;
      })
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(err => reject(err));

    })


  }

  cancel = () => {
    this.props.callbackShowModal(false);
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      deckBeingEdited: {
        [name]: value
      }
    });
  };

render() {
  const { name, category, publicdeck, deckcreatorid, datecreated, datelastmodified, deckid } = this.state.deckBeingEdited;
  const { handleChange } = this;
  return (
    <MDBContainer>
      <MDBModal fade={false} isOpen={true}>
        <MDBModalHeader className="blue-grey-text"><strong>Edit Deck</strong></MDBModalHeader>
        <MDBModalBody className="">
          <MDBInput type="text" label="Deck Name" size="lg" name="name" value={name} onChange={this.handleChange} />
          <MDBInput type="text" label="Category" size="lg" name="category" value={category} onChange={handleChange} />

          <div>
            <MDBInput label="Public Deck" name="publicdeck"  type="checkbox" id="checkbox2"
            checked={publicdeck}
            onChange={this.state.togglePublicDeck} icon="pencil-alt" size="1x" alt="Public Deck"/>
          </div>

          <MDBInput label="Deck Creator Id" size="lg" value={deckcreatorid} disabled/>
          <MDBInput label="Date Created" size="lg" value={datecreated} disabled/>
          <MDBInput label="Date Last Modified" size="lg" value={datelastmodified} disabled/>
          <MDBInput label="Deck Id" size="lg" value={deckid} disabled/>
        </MDBModalBody>

        <MDBModalFooter className="">
          <MDBBtn color="secondary" onClick={this.props.callbackShowModal}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
          <MDBBtn color="danger" onClick={this.clickDelete}>Delete Deck</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalDeckEdit;