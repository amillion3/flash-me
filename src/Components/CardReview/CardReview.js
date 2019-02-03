import React, { Component, Fragment } from 'react';

import CRAnswer from '../CardReview/CRAnswer/CRAnswer';
import CRQuestion from '../CardReview/CRQuestion/CRQuestion';
import CRRatingContainer from '../CardReview/CRRatingContainer/CRRatingContainer';
import CRRatingMenu from '../CardReview/CRRatingMenu/CRRatingMenu';

import RequestsCards from '../../Requests/Cards';

import './CardReview.scss';

class CardReview extends Component {
  state = {
    currentDeckId: 1,
    currentDeckPosition: 0,
    showQuestion: true,
  }

  theCallback = showQuestion => {
    this.setState({ showQuestion })
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      RequestsCards.GetAllByDeckId(this.state.currentDeckId)
      .then(deck => {
        this.setState({ deck })
        resolve (deck);
      })
      .catch(error => reject(error));
    });
  };

  clickNext = rating => {
    // rating param is not used now, but should be eventually
    let currentDeckPosition = this.state.currentDeckPosition;
    currentDeckPosition++;
    if (currentDeckPosition < this.state.deck.length) {
      // There are still cards to review in this deck
      this.setState({
        currentDeckPosition,
        showQuestion: true,
      })
    } else {
      // All cards have been reviewed in this deck, start over.
      this.setState({
        currentDeckPosition: 0,
        showQuestion: true,
      })
    }
  };

  render() {
    const {
      deck,
      currentDeckPosition,
      currentDeckId,
      showQuestion
    } = this.state;

    return (
      <Fragment>
        {
          deck ?  // is there anything in this.state.deck?
          (
            showQuestion ?  // Show question card?
              <CRQuestion
                id={currentDeckId}
                callbackFromParent={this.theCallback}
                questionText={ deck[currentDeckPosition].question }
                >
              </CRQuestion>
            :
              // Show answer card.
              <CRAnswer
                id={currentDeckId}
                callbackFromParent={this.theCallback}
                answerText={ deck[currentDeckPosition].answer }
                >
              </CRAnswer>
          )
          :
            null  // END checking of anything in this.state.deck
        }


        <CRRatingContainer
          callbackFromCardReview={this.clickNext}
        >

        </CRRatingContainer>

        <CRRatingMenu></CRRatingMenu>

      </Fragment>
    );
  }
}

export default CardReview;
