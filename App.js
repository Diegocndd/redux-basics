import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Application from './src';
import {Provider} from 'react-redux';
import {Store} from './src/reduxControll/store';

export default class App extends Component{

  render(){
    return(
      <Provider store={Store}>
        <Application />
      </Provider>
      )
  }
}