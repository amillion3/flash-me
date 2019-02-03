import React, { Component, Fragment } from 'react';

import TableCards from './TableCards/TableCards';
import TableDecks from './TableDecks/TableDecks';

import './DeckManagement.scss';

class DeckManagement extends Component {
  state = {

  }

  render() {
    console.log(this.props.auth);
    console.log(this.props.auth.auth0.client.baseOptions.clientID);
    return (
      <Fragment>
        <h1>Deck Management</h1>
        <TableDecks>

        </TableDecks>

      </Fragment>
    );
  }
}

export default DeckManagement;
