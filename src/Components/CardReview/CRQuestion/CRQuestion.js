import React, { Fragment, Component } from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

import RequestsCards from '../../../Requests/Cards';
import RequestsDecks from '../../../Requests/Decks';

import './CRQuestion.scss';

class CRQuestion extends Component {
  state = {
    deckId: 0,
    deck: [],
    card: [],
    show: true,
  };

  clicky = () => {
    this.props.callbackFromParent(!this.state.show);
    this.setState({show: !this.state.show});
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      RequestsCards.GetAllByDeckId(this.props.id)
      .then(deck => {
        this.setState({ deck })
        console.log('comp did mount',this.state.deck);
        resolve (deck);
      })
      .catch(error => reject(error));
    });
  };

  render() {
    return (
      <Fragment>
        <MDBJumbotron fluid>
          <MDBContainer
            onClick={this.clicky}
          >
            <h2 className="display-4 card-rev">What is C#?</h2>
          </MDBContainer>
        </MDBJumbotron>
      </Fragment>
    );
  }
};

export default CRQuestion;
