import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import styles from './styles';

import AboutConduct from './AboutConduct';

class AboutContainer extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageHeader}>
          <Image source={require('../../assets/r10_logo.png')} />
        </View>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.header}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC
        </Text>
        <Text style={styles.header}>Code of Conduct</Text>
        <AboutConduct />
      </ScrollView>
    );
  }
}

export default AboutContainer;
