import React, { Component } from 'react';
import Auth from './auth/Auth.js';


import './App.scss';

const auth = new Auth();
auth.login();

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <h2>there</h2>

      </div>
    );
  }
}

export default App;
