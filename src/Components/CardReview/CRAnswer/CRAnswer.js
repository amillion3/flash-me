import React, { Fragment, Component } from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

import './CRAnswer.scss';


class CRAnswer extends Component {
  state = {
    deckId: 0,
    deck: [],
    card: [],
    show: false,
  };

  componentDidMount() {
    console.log('comp mount, props : ',this.props);
    return new Promise((resolve, reject) => {
      RequestsDecks.GetSingle(this.props.id)
      .then(deck => {
        console.log('comp mount, deck: ',deck);
        this.setState({ deck })
        resolve (deck);
      })
      .catch(error => reject(error));
    });
  };


  clicky = e => {
    this.props.callbackFromParent(!this.state.show);
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <Fragment>
        <MDBJumbotron fluid>
          <MDBContainer
            onClick={this.clicky}
          >
            <h2 className="display-4 card-rev">C# is a general purpose, object oriented programming language.</h2>
          </MDBContainer>
        </MDBJumbotron>
      </Fragment>
    );
  }
};

export default CRAnswer;
