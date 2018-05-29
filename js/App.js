import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloProvider } from 'react-apollo';
import client from './config/api';

import RootStackNavigator from './navigation/RootStackNavigator';

import About from './screens/About';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
