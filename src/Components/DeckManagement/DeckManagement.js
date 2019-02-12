import React, { Component, Fragment } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBIcon } from 'mdbreact';

import TableCards from './TableCards/TableCards';
import TableDecks from './TableDecks/TableDecks';
import UserDeckPairingRequest from '../../Requests/UserDeckPairing';
import CardsRequest from '../../Requests/Cards';
import DecksRequest from '../../Requests/Decks';
import ModalEdit from './ModalEdit/ModalEdit';

import './DeckManagement.scss';

class DeckManagement extends Component {
  state = {
    manageDecks: false,
    manageCards: false,
    showModalEdit: false,
    showModalDelete: false,
    currentUserId: 1,
    usersDeckIds: [], // just the ids, via props
    usersDecks: [], // full decks, from API
    selectedDeck: null, // passed to modal after click
    deck: [],
    columns: [
      {
        'label': 'Deck Id',
        'field': 'deckid',
        'sort': 'asc'
      }, {
        'label': 'Deck Name',
        'field': 'name',
        'sort': 'asc'
      }, {
        'label': 'Category',
        'field': 'category',
        'sort': 'asc'
      }, {
        'label': 'Public Deck',
        'field': 'publicdeck',
        'sort': 'asc'
      }, {
        'label': 'Deck Creator Id',
        'field': 'deckcreatorid',
        'sort': 'asc'
      }, {
        'label': 'Date Created',
        'field': 'datecreated',
        'sort': 'asc'
      }, {
        'label': 'Date Last Modified',
        'field': 'datelastmodified',
        'sort': 'asc'
      },
    ],
    rows: []
  }

  componentDidMount() {
    console.log('this.props.auth',this.props.auth);
    console.log('this.props.auth.auth0.client.baseOptions.clientID',this.props.auth.auth0.client.baseOptions.clientID);
    const usersDecks = [];

    return new Promise((resolve, reject) => {
      UserDeckPairingRequest.GetDecksByUserId(this.state.currentUserId)
      .then(deck => {
        deck.map(d => {
          usersDecks.push(d.deckid);
          this.setState({ deck: [...this.state.deck,d.deckid] })
          return d;
        })
        return(usersDecks);
      })
      // Yes, I realize this is very inefficient. n + 1
      .then(usersDecks => {
        usersDecks.map(deckId => {
          return new Promise((resolve, reject) => {
            DecksRequest.GetSingle(deckId)
            .then(deck => {
              const {deckid, name, category, publicdeck, deckcreatorid, datecreated, datelastmodified} = deck;
              this.setState({
                rows: [...this.state.rows, {
                  deckid: deckid,
                  name: name,
                  category: category,
                  publicdeck: publicdeck,
                  deckcreatorid: deckcreatorid,
                  datecreated: datecreated,
                  datelastmodified: datelastmodified,
                  actions: '',
                }]
              })
            })
            resolve(true);
          })
        })
      })
      .catch(error => reject(error))
    });
  };

  clickDelete = e => {
    console.log('delete', e.target.id);
    // DecksRequest.DeleteDeck(e.target.id);
  }

  clickEdit = e => {
    return new Promise((resolve, reject) => {
      DecksRequest.GetSingle(e.target.id)
      .then(deck => {
        this.setState({
          selectedDeck: deck,
        })
        return true;
      })
      .then(() => {
        this.setState({
          showModalEdit: true,
        })
        resolve();
      })
      .catch(err => reject(err));
    })
  }

  callbackShowModal = () => {
    this.setState({
      showModalEdit: false,
      showModalDelete: false,
    })
  }

  render() {
    const { manageDecks, manageCards, selectedDeck } = this.state;

    const RowForDeck = this.state.rows.map(d => {
      console.log('d-----',d)
      return(
        <tr id={d.deckid} className="">
          <td className='td-decks'>{d.deckid}</td>
          <td className='td-decks'>{d.name}</td>
          <td className='td-decks'>{d.category}</td>
          <td className='td-decks'>{d.publicdeck}</td>
          <td className='td-decks'>{d.deckcreatorid}</td>
          <td className='td-decks'>{d.datecreated}</td>
          <td className='td-decks'>{d.datelastmodified}</td>
          <td className='td-decks'>
            <MDBIcon icon="edit" size="2x" id={d.deckid} onClick={this.clickEdit} data={d}/>
          </td>
          <td className='td-decks'>
            <MDBIcon id={d.deckid} icon="trash" size="2x" onClick={this.toggle}/>
          </td>
        </tr>
      )
    })

    return (
      <Fragment>
        {
          this.state.showModalEdit ?
            <ModalEdit
              data={this.state.selectedDeck}
              callbackShowModal={this.callbackShowModal}
            ></ModalEdit>
          : null

        }

        <h1 className="deck-mgmt-header">Deck Management</h1>
        <Fragment>
          <MDBBtn
            color="mdb-color"
            usersdeckids={ this.state.deck }
            onClick={() => this.setState({manageDecks: true, manageCards: false})}
          >
            Manage Decks
          </MDBBtn>
          <MDBBtn
            color="mdb-color"
            usersdeckids={ this.state.deck }
            onClick={() => this.setState({manageDecks: false, manageCards: true})}
          >
            Manage Cards
          </MDBBtn>
        </Fragment>
        { // Show `decks` table, for edit/delete
          manageDecks ?
          <Fragment>
            <h2 className="text-center deck-mgmt-title">Decks</h2>
            <Fragment>
              <MDBTable id="dtBasicExample" className="table table-striped small cloudy-knoxville-gradient" cellSpacing="0" width="100%">
              <MDBTableHead>
                <tr>
                  <th className="th-sm th-decks th-decks">Deck Id
                  </th>
                  <th className="th-sm th-decks">Name
                  </th>
                  <th className="th-sm th-decks">Category
                  </th>
                  <th className="th-sm th-decks">Public Deck
                  </th>
                  <th className="th-sm th-decks">Deck Creator Id
                  </th>
                  <th className="th-sm th-decks">Date Created
                  </th>
                  <th className="th-sm th-decks">Date Last Modified
                  </th>
                  <th className="th-sm th-decks"></th>
                  <th className="th-sm th-decks"></th>
                </tr>
              </MDBTableHead>
              <tbody className="">
                {RowForDeck}
              </tbody>
            </MDBTable>
          </Fragment>
        </Fragment>
          : null
        }
        { // Show `cards` table, for edit/delete
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