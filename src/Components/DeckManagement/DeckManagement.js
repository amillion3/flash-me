import React, { Component, Fragment } from 'react';
import { MDBBtn } from 'mdbreact';

import TableCards from './TableCards/TableCards';
import TableDecks from './TableDecks/TableDecks';
import UserDeckPairingRequest from '../../Requests/UserDeckPairing';

import './DeckManagement.scss';

class DeckManagement extends Component {
  state = {
    manageDecks: false,
    manageCards: false,
    currentUserId: 1,
  }

  componentDidMount() {
    console.log(this.props.auth);
    console.log(this.props.auth.auth0.client.baseOptions.clientID);

    return new Promise((resolve, reject) => {
      UserDeckPairingRequest.GetDecksByUserId(this.state.currentUserId)
      .then(deck => {
        this.setState({ deck })
        console.log('DECKKKKKKKKKKKKKKKK, ',this.state.deck);
        resolve (deck);
      })
      .catch(error => reject(error));
    });
  };

  render() {

    const { manageDecks, manageCards } = this.state;
    return (
      <Fragment>
        <h1 className="deck-mgmt-header">Deck Management</h1>
        <Fragment>
          <MDBBtn
            color="mdb-color"
            deckInfo={ this.state.deck }
            onClick={() => this.setState({manageDecks: true, manageCards: false})}
          >
            Manage Decks
          </MDBBtn>
          <MDBBtn
            color="mdb-color"
            onClick={() => this.setState({manageDecks: false, manageCards: true})}
          >
            Manage Cards
          </MDBBtn>
        </Fragment>
        {
          manageDecks ?
            <TableDecks>

            </TableDecks>
          : null
        }
        {
          manageCards ?
            <TableCards>

            </TableCards>
          : null
        }

      </Fragment>
    );
  }
}

export default DeckManagement;
