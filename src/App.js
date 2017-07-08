import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>

        <div className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Written by React</p>
        </div>
      </div>
    );
  }
}

export default App;
