import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingWheel from '../../components/LoadingWheel';
import React, { Component } from 'react';
import { Text, SectionList, View } from 'react-native';
import Moment from 'moment';

import colourStyles from '../../config/styles';
import styles from './styles';

const sessionQuery = gql`
  {
    allSessions {
      description
      title
      id
      location
      startTime
      speaker {
        bio
        name
      }
    }
  }
`;

class Schedule extends Component {
  formatSessionData = sessions => {
    return sessions
      .reduce((acc, curr) => {
        const timeExists = acc.find(
          section => section.title === curr.startTime
        );
        timeExists
          ? timeExists.data.push(curr)
          : acc.push({ title: curr.startTime, data: [curr] });
        return acc;
      }, [])
      .sort((a, b) => a.title - b.title);
  };

  render() {
    return (
      <Query query={sessionQuery}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWheel />;
          if (error) return <Text>Error :(</Text>;

          const sortedData = this.formatSessionData(data.allSessions);

          return (
            <SectionList
              renderItem={({ item, index, section }) => (
                <View key={index} style={styles.singleEvent}>
                  <Text>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text
                  style={{
                    fontWeight: 'bold',
                    backgroundColor: colourStyles.mediumgray,
                    marginBottom: 10
                  }}
                >
                  {Moment(title).format('h:mm A')}
                </Text>
              )}
              sections={sortedData}
              keyExtractor={(item, index) => item + index}
            />
          );
        }}
      </Query>
    );
  }
}

export default Schedule;
