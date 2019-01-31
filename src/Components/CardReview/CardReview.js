import React, { Component, Fragment } from 'react';

import ButtonCardRating from '../Buttons/ButtonCardRating/ButtonCardRating';
import CRAnswer from '../CardReview/CRAnswer/CRAnswer';
import CRQuestion from '../CardReview/CRQuestion/CRQuestion';
import CRRatingContainer from '../CardReview/CRRatingContainer/CRRatingContainer';
import CRRatingMenu from '../CardReview/CRRatingMenu/CRRatingMenu';

import './CardReview.scss';

class CardReview extends Component {
  state = {
    currentDeckId: 1,
    showQuestion: false,
  }

  render() {
    // onClick does not work right now
    return (
      <Fragment>
        {
          this.state.showQuestion ? null
            // <CRQuestion
            //   id={this.state.currentDeckId}
            //   callbackFromParent={this.questionCallback}
            //   showQuestion ={this.state.showQuestion}
            //   >
            // </CRQuestion>
          :
            <CRAnswer
              id={this.state.currentDeckId}
              callbackFromParent={this.answerCallback}
              showAnswer ={this.state.showAnswer}
              >
            </CRAnswer>

        }

        <CRRatingContainer>

          <ButtonCardRating></ButtonCardRating>

        </CRRatingContainer>

        <CRRatingMenu></CRRatingMenu>

      </Fragment>
    );
  }
}

export default CardReview;