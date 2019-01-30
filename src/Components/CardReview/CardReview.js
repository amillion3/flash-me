import React, { Component, Fragment } from 'react';

import ButtonCardRating from '../Buttons/ButtonCardRating/ButtonCardRating';
import CRAnswer from '../CardReview/CRAnswer/CRAnswer';
import CRQuestion from '../CardReview/CRQuestion/CRQuestion';
import CRRatingContainer from '../CardReview/CRRatingContainer/CRRatingContainer';
import CRRatingMenu from '../CardReview/CRRatingMenu/CRRatingMenu';

import './CardReview.scss';

class CardReview extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <CRQuestion></CRQuestion>
        <CRAnswer></CRAnswer>
        <CRRatingContainer>
          <ButtonCardRating></ButtonCardRating>
        </CRRatingContainer>
        <CRRatingMenu></CRRatingMenu>
      </Fragment>
    );
  }
}

export default CardReview;