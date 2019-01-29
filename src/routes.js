import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Dashboard from './Components/Dashboard/Dashboard';
import CardReview from './Components/CardReview/CardReview';
import { MDBMask, MDBView, MDBContainer, MDBCol, MDBRow } from "mdbreact";

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
        className="flex-center flex-column text-white text-center">
        <MDBContainer fluid className="text-center my-5 component-container" spacing={24}>
        <MDBRow>
          <MDBCol size="24" sm="1" md="2" lg="3"></MDBCol>
          <MDBCol size="24" sm="10" md="8" lg="6">
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
            <Route path="/cardreview" render={(props) => <CardReview auth={auth} {...props} />} />
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
