import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import logo from '../logo.svg';

class Footer extends Component{
  render(){
    return(
      <Paper zDepth={1}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Written by React</p>
      </Paper>
    );
  }
}

export default Footer;
