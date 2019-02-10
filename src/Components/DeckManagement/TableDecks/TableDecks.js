import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Requests from '../../../Requests/Decks'

import './TableDecks.scss'

class TableDecks extends Component {
  state = {
    data: {},
  }

  componentDidMount() {

    if(this.props.data){
      console.log('data89898989', this.props.data)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = this.props.data !== nextProps.data;
    if (shouldUpdate) {
      console.log('should comp update')
    }
  }

  // static getDerivedStateFromProps(props) {
  //   if (props) {
  //     console.log('static', this.props.data)
  //     this.setState({data:this.props.data})
  //      }
  //   // when null is returned no update is made to the state
  //   return null;
  // }

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

export default TableDecks;