import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Requests from '../../../Requests/Decks'

import './TableDecks.scss'

class TableDecks extends Component {
  state = {
    data: {},
  }

  componentDidMount() {

    // Requests.GetSingle(1)
    // .then(response => {
    //   this.setState({data: response})
    // })
  }

  static getDerivedStateFromProps(props, state) {
    if (state.data !== props.data) {
      console.log('static', this.props.data)
      this.setState({data:this.props.data})
       }
    // when null is returned no update is made to the state
    return null;
  }

  render() {
    const {data} = this.props;

    return (
      <Fragment>
        <h1>edit</h1>
        <h1>ac{data}</h1>
        <h1>adfdfc{this.props.data}</h1>
        <h1>{this.state.data.deckid}</h1>
      </Fragment>
    );
  }
}

TableDecks.propTypes = {
  data: PropTypes.object,
};

export default TableDecks;