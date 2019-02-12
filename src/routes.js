import React from 'react';
import { Route, Router } from 'react-router-dom';
import { MDBMask, MDBView, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import DeckManagement from './Components/DeckManagement/DeckManagement';
import App from './App';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

import About from './Components/About/About';
import CardReview from './Components/CardReview/CardReview';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Home/Home';
import Settings from './Components/Settings/Settings';
import TableDecks from './Components/DeckManagement/TableDecks/TableDecks';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
      <MDBMask
        overlay="purple-light"
        className="flex-center flex-column text-white text-center"
        >
        <MDBContainer fluid className="text-center my-5 component-container" spacing={24}>
        <MDBRow>
          <MDBCol size="24" sm="1" md="2" lg="3"></MDBCol>
          <MDBCol size="24" sm="10" md="8" lg="6">
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/deckmanagement" render={(props) => <DeckManagement auth={auth} {...props} />} />
            <Route path="/about" render={(props) => <About auth={auth} {...props} />} />
            <Route path="/cardreview" render={(props) => <CardReview auth={auth} {...props} />} />
            <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
            <Route path="/decks" render={(props) => <TableDecks auth={auth} {...props} />} />
            <Route path="/settings" render={(props) => <Settings auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </MDBCol>
          <MDBCol size="24" sm="1" md="2" lg="3"></MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBMask>
      </MDBView>
    </Router>
  );
}
