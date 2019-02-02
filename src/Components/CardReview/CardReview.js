import React, { Component, Fragment } from 'react';

import ButtonCardRating from '../Buttons/ButtonCardRating/ButtonCardRating';
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
    console.log('comp did mount, 1st');
    return new Promise((resolve, reject) => {
      RequestsCards.GetAllByDeckId(this.state.currentDeckId)
      .then(deck => {
        this.setState({ deck })
        console.log('CardReview, comp did mount',this.state.deck);
        resolve (deck);
      })
      .catch(error => reject(error));
    });
  };

  clickNext = () => {
    console.log('clicked', this.state.currentDeckPosition);
    let currentDeckPosition = this.state.currentDeckPosition;
    currentDeckPosition++;

    this.setState({
      currentDeckPosition
    })
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


        <CRRatingContainer>

          {/* <ButtonCardRating></ButtonCardRating> */}

        </CRRatingContainer>

        <CRRatingMenu></CRRatingMenu>

      </Fragment>
    );
  }
}

export default CardReview;
