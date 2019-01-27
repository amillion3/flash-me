import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Sample1 from './Sample/Sample1';
import Sample2 from './Sample/Sample2'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
          <Route path="/sample1" render={(props) => <Sample1 auth={auth} {...props} />} />

          <Route path="/sample2" render={(props) => <Sample2 auth={auth} {...props} />} />
        </div>
      </Router>
  );
}
