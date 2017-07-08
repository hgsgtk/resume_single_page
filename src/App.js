import React, { Component } from 'react';
import './App.css';

import { cyan500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';

import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import HistoryCard from './components/HistoryCard';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <ProfileCard />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <HistoryCard />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Footer />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
