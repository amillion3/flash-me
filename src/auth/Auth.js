import auth0 from 'auth0-js';
import history from '../history';
export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: 'andymillion.auth0.com',
    clientID: '2VTCUEIRW5VKyGf5CzKn27FHs7ojH30n',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  };

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  };

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}.`);
      };
    });
  }

  getAccessToken() {
    return this.accessToken;
  };

  getIdToken() {
    return this.idToken;
  };

  setSession(authResult) {
    // Set `isLoggedIn` flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1200) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // redirect to the home route
    history.replace('/home');
  };

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove tokens and expiration time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove `isLoggedIn` flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // redirect to the home route
    history.replace('/home');
  };

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiration time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  };
}