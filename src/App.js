import React, { Component } from 'react';
import './App.css';

import { cyan500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import HistoryCard from './components/HistoryCard';
import Footer from './components/Footer';

const styles = {
  container: {
    padding: '10px',
  },
};

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="App">
          <Header />
          <div style={styles.container}>
            <ProfileCard
              style={styles.leftcard}/>
            <HistoryCard />
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
