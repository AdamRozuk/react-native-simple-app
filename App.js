import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Main from './app/components/Main'

export default class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }
}

