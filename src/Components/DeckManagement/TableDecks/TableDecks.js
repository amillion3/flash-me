import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Requests from '../../../Requests/Decks'

import './TableDecks.scss'

class TableDecks extends Component {
  state = {
    data: {},
  }

  render() {
    const {data} = this.props;

    return (
      <Fragment>
        <h1>edit</h1>
        <h1>ac{data}</h1>
        <h1>adfdfc{this.props.data}</h1>
        <h1>{data.deckid}</h1>
      </Fragment>
    );
  }
}

export default TableDecks;