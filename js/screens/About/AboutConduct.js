import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LoadingWheel from '../../components/LoadingWheel';
import SingleConduct from './SingleConduct';

import styles from './styles';

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
