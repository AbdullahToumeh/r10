import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingWheel from '../../components/LoadingWheel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, SectionList, View, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import ScheduleList from '../../components/ScheduleList';

import { formatSessionData, compareFaves } from '../../lib/functions';

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
  render() {
    return (
      <Query query={sessionQuery}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWheel />;
          if (error) return <Text>Error :(</Text>;

          const favesList = compareFaves(this.props.faves, data.allSessions);
          console.log(favesList);
          const sortedData = formatSessionData(data.allSessions);

          return (
            <SectionList
              renderItem={({ item, index, section }) => (
                <ScheduleList
                  item={item}
                  index={index}
                  section={section}
                  nav={this.props.nav}
                  fav={favesList.find(fave => fave.id === item.id)}
                />
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
