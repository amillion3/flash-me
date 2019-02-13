import React, { Fragment, Component } from 'react';

import './TableDecks.scss'

class TableDecks extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    console.log(this.props.data)
  }

  render() {
    const {data} = this.props;

    return (
      <Fragment>
        <h1>edit</h1>
        {
          data ?
          <Fragment>
            <h1>props!</h1>
            <h2></h2>

          </Fragment>
          :
          <h1>no props</h1>
        }
      </Fragment>
    );
  }
}

export default TableDecks;