import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingWheel from '../../components/LoadingWheel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, SectionList, View, TouchableOpacity } from 'react-native';
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
        id
        bio
        url
        name
        image
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
    console.log(this.props.faves);
    return (
      <Query query={sessionQuery}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWheel />;
          if (error) return <Text>Error :(</Text>;

          const sortedData = this.formatSessionData(data.allSessions);
          console.log(sortedData);

          return (
            <SectionList
              renderItem={({ item, index, section }) => (
                <View key={index} style={styles.singleEvent}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.nav.navigate('Session', {
                        title: item.title,
                        description: item.description,
                        time: item.startTime,
                        location: item.location,
                        speaker: item.speaker,
                        id: item.id,
                        faves: this.props.faves
                      })
                    }
                  >
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.location}>{item.location}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>
                  {Moment(title).format('h:mm A')}
                </Text>
              )}
              ItemSeparatorComponent={() => <View style={styles.seperator} />}
              sections={sortedData}
              keyExtractor={(item, index) => item + index}
            />
          );
        }}
      </Query>
    );
  }
}

export default connect(state => ({
  faves: state.faveData.faves
}))(Schedule);
