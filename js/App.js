import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloProvider } from 'react-apollo';
import client from './config/api';

import About from './screens/About';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          <About />
        </View>
      </ApolloProvider>
    );
  }
}
