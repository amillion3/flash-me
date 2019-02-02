import React, { Fragment, Component } from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

import './CRQuestion.scss';

class CRQuestion extends Component {
  state = {
    show: true,
  };

  clicky = () => {
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
            <h2 className="display-4 card-rev">
              {this.props.questionText}
            </h2>
          </MDBContainer>
        </MDBJumbotron>
      </Fragment>
    );
  }
};

export default CRQuestion;
