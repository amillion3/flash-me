import React, { Fragment, Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import DecksRequest from '../../../Requests/Decks';

import './TableDecks.scss'

const data = {
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
  rows: [
    {
      'deckid': 1,
      'name': "C#",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "1",
      'datecreated': "01/01/2009",
      'datelastmodified': "01/01/2011",
    },
    {
      'deckid': 2,
      'name': "HTML",
      'category': "Technology",
      'publicdeck': "False",
      'deckcreatorid': "1",
      'datecreated': "01/01/2019",
      'datelastmodified': "01/01/2019",
    },
    {
      'deckid': 3,
      'name': "Interview Questions",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "1",
      'datecreated': "01/01/2014",
      'datelastmodified': "01/01/2015",
    },
    {
      'deckid': 4,
      'name': "JavaScript",
      'category': "Technology",
      'publicdeck': "False",
      'deckcreatorid': "2",
      'datecreated': "01/01/2015",
      'datelastmodified': "01/01/2016",
    },
    {
      'deckid': 5,
      'name': "React",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "3",
      'datecreated': "01/01/2017",
      'datelastmodified': "01/01/2019",
    },
    {
      'deckid': 1,
      'name': "C#",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "1",
      'datecreated': "01/01/2009",
      'datelastmodified': "01/01/2011",
    },
    {
      'deckid': 2,
      'name': "HTML",
      'category': "Technology",
      'publicdeck': "False",
      'deckcreatorid': "1",
      'datecreated': "01/01/2019",
      'datelastmodified': "01/01/2019",
    },
    {
      'deckid': 3,
      'name': "Interview Questions",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "1",
      'datecreated': "01/01/2014",
      'datelastmodified': "01/01/2015",
    },
    {
      'deckid': 4,
      'name': "JavaScript",
      'category': "Technology",
      'publicdeck': "False",
      'deckcreatorid': "2",
      'datecreated': "01/01/2015",
      'datelastmodified': "01/01/2016",
    },
    {
      'deckid': 5,
      'name': "React",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "3",
      'datecreated': "01/01/2017",
      'datelastmodified': "01/01/2019",
    },
    {
      'deckid': 1,
      'name': "C#",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "1",
      'datecreated': "01/01/2009",
      'datelastmodified': "01/01/2011",
    },
    {
      'deckid': 2,
      'name': "HTML",
      'category': "Technology",
      'publicdeck': "False",
      'deckcreatorid': "1",
      'datecreated': "01/01/2019",
      'datelastmodified': "01/01/2019",
    },
    {
      'deckid': 3,
      'name': "Interview Questions",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "1",
      'datecreated': "01/01/2014",
      'datelastmodified': "01/01/2015",
    },
    {
      'deckid': 4,
      'name': "JavaScript",
      'category': "Technology",
      'publicdeck': "False",
      'deckcreatorid': "2",
      'datecreated': "01/01/2015",
      'datelastmodified': "01/01/2016",
    },
    {
      'deckid': 5,
      'name': "React",
      'category': "Technology",
      'publicdeck': "True",
      'deckcreatorid': "3",
      'datecreated': "01/01/2017",
      'datelastmodified': "01/01/2019",
    }
  ]
};

class TableDeck extends Component {
  state = {
    usersDecks: [],
  }
  hasData = false;
  // componentWillReceiveProps() {
  //   this.setState({deck: this.props.deckIds});
  //   console.log('------------------',this.state.deck)
  // }

  componentDidMount() {
    this.getDecks();
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
        // 2nd promise, get each deck from previous promise
        return new Promise((resolve1, reject1) => {
          DecksRequest.GetSingle(deckId.deckid)
          .then(response => {
            console.log('ze response', response)
            this.setState({
              usersDecks: [...this.state.usersDecks, response],
            })
          })
          return true;
        })
      })
    }


    // this.state.deckids.map(singleDeck => {
    //   console.log('promise')
    //   return new Promise((resolve, reject) => {
    //     DecksRequest.GetSingle(singleDeck.deckid)
    //     .then(deck => {
    //       this.setState({
    //         usersDecks: [...this.state.usersDecks, deck],
    //       })
    //       console.log('131313131313131313, ',this.state.usersDecks);
    //       resolve (deck);
    //     })
    //     .catch(error => reject(error));
    //   });
    // })


  render() {

    // if (this.state.deck) {
    //   this.state.deck.map(deck => {
    //     console.log('deck', deck);
    //     return data.rows.push(deck);
    //   })
    // }


    return (
      <Fragment>
        <h2 className="text-center deck-mgmt-title">Decks</h2>
        <MDBDataTable
          small
          responsive
          bordered
          theadColor="indigo"
          tbodyColor="deep-blue-gradient"
          data={data}
        />
      </Fragment>
    );
  }
}

export default TableDeck;