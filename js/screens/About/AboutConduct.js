import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';

import LoadingWheel from '../../components/LoadingWheel';

import styles from './styles.js';

const conductQuery = gql`
  {
    allConducts {
      description
      title
      id
    }
  }
`;

const AboutConduct = () => {
  return (
    <View style={styles.conductContent}>
      <Query query={conductQuery}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWheel />;
          if (error) return <Text>Error :(</Text>;

          return data.allConducts.map(({ description, title }, index) => (
            <View style={styles.singleConduct} key={index}>
              <Text style={styles.conductTitle}>{title}</Text>
              <Text>{description}</Text>
            </View>
          ));
        }}
      </Query>
    </View>
  );
};

export default AboutConduct;
