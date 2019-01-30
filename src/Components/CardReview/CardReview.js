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
    showQuestion: true,
  }

  render() {
    // onClick does not work right now
    return (
      <Fragment>
        {
          this.state.showQuestion ?
            <CRQuestion
              id={this.state.currentDeckId}
              onClick={() => this.setState({ showQuestion: false })}
              >
            </CRQuestion>
          : null
        }
        {
          !this.state.showQuestion ?
            <CRAnswer
              id={this.state.currentDeckId}
              onClick={() => this.setState({ showQuestion: true })}
              >
            </CRAnswer>
          : null
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