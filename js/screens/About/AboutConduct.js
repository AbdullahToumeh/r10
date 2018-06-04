import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, ScrollView, View, Animated, Easing } from 'react-native';

import LoadingWheel from '../../components/LoadingWheel';
import SingleConduct from './SingleConduct';

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

class AboutConduct extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      currentIndex: -1
    };
  }

  render() {
    return (
      <View style={styles.conductContent}>
        <Query query={conductQuery}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingWheel />;
            if (error) return <Text>Error </Text>;

            return data.allConducts.map(({ description, title }, index) => (
              <SingleConduct
                description={description}
                title={title}
                index={index}
                key={index}
              />
            ));
          }}
        </Query>
      </View>
    );
  }
}

export default AboutConduct;
