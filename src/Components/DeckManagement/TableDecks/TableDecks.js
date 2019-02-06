import React, { Fragment, Component } from 'react';
import DecksRequest from '../../../Requests/Decks';

import TestTable from './TestTable';

import './TableDecks.scss';

class TableDeck extends Component {
  state = {
    usersDecks: [],
    loaded: false,
    deckOutput : {
      columns: [
        {
          'label': 'Deck Id',
          'field': 'deckid',
          'sort': 'asc'
        },
        {
          'label': 'Deck Name',
          'field': 'name',
          'sort': 'asc'
        },
        {
          'label': 'Category',
          'field': 'category',
          'sort': 'asc'
        },
        {
          'label': 'Public Deck',
          'field': 'publicdeck',
          'sort': 'asc'
        },
        {
          'label': 'Deck Creator Id',
          'field': 'deckcreatorid',
          'sort': 'asc'
        },
        {
          'label': 'Date Created',
          'field': 'datecreated',
          'sort': 'asc'
        },
        {
          'label': 'Date Last Modified',
          'field': 'datelastmodified',
          'sort': 'asc'
        }
      ],
      rows: [{
        'deckid': 1,
        'name': 'nadf df me',
        'category': 'catd d egory',
        'publicdeck': 1,
        'deckcreatorid': 1,
        'datecreated': '2000-02-02',
        'datelastmodified': '2000-02-02',
      }]
    }
  }
  hasData = false;

  // TODO this whole componentMount/Props should be refactored
  componentDidMount() {
    this.getDecks();
  }

  componentDidUpdate() {
    if (this.state.usersDecks.length === this.props.deckIds.length && this.state.loaded === false) {
      this.setState({loaded: true})
    }
  }

  componentWillUpdate () {
    console.log(this.props.deckIds)
      if (this.state.usersDecks.length > 0) return;
      this.getDecks();
    }

    getDecks = () => {
      if (this.hasData) return;
      this.hasData = true;

      return this.props.deckIds.map(deckId => {
        // get each deck, as specified in props
        return new Promise((resolve1, reject1) => {
          DecksRequest.GetSingle(deckId.deckid)
          .then(response => {
            const temp = {
              'deckid': response.deckid,
              'name': response.name,
              'category': response.category,
              'publicdeck': response.publicdeck,
              'deckcreatorid': response.deckcreatorid,
              'datecreated': response.datecreated,
              'datelastmodified': response.datelastmodified,
            }
            // deckOutput.rows.push(temp)
            this.setState({
              usersDecks: [...this.state.usersDecks, response],
              loaded: false,
            })
          })
        })
      })
    }

  render() {

    if (this.state.loaded === true) {
      // const { usersDecks } = this.state;
      this.state.usersDecks.map(deck => {
        const {deckid, name, category, publicdeck, deckcreatorid, datecreated, datelastmodified} = deck
        const temp = {
          'deckid': deckid,
          'name': name,
          'category': category,
          'publicdeck': publicdeck,
          'deckcreatorid': deckcreatorid,
          'datecreated': datecreated,
          'datelastmodified': datelastmodified,
        }
        return this.state.deckOutput.rows.push(temp);
      })
    }


    return (
      <Fragment>
        <h2 className="text-center deck-mgmt-title">Decks</h2>
        <TestTable
          data={this.state.deckOutput}
        ></TestTable>


      </Fragment>
    );
  }
}

export default TableDeck;