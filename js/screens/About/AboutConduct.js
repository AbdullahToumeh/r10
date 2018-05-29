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

class AboutConduct extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      currentIndex: -1
    };
  }

  showContent(index) {
    this.setState({ isVisible: !this.state.isVisible, currentIndex: index });
  }

  render() {
    return (
      <View style={styles.conductContent}>
        <Query query={conductQuery}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingWheel />;
            if (error) return <Text>Error :(</Text>;

            return data.allConducts.map(({ description, title }, index) => (
              <View style={styles.singleConduct} key={index}>
                <Text
                  style={styles.conductTitle}
                  onPress={() => this.showContent(index)}
                >
                  + {title}
                </Text>
                {this.state.isVisible && this.state.currentIndex === index ? (
                  <Text id={'conduct' + index}>{description}</Text>
                ) : (
                  <Text />
                )}
              </View>
            ));
          }}
        </Query>
      </View>
    );
  }
}

export default AboutConduct;
