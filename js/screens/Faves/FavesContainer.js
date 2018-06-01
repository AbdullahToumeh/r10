import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import realm from '../../config/models';
import Faves from './Faves';
import { connect } from 'react-redux';
import { formatSessionData } from '../../lib/functions';
import LoadingWheel from '../../components/LoadingWheel';
import ScheduleList from '../../components/ScheduleList';
import Moment from 'moment';

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


class FavesContainer extends Component {
  compareFaves = (faveList, sessions) => {
    const faveSessions = sessions.filter(session => faveList.find(fave => fave.id === session.id));
    return faveSessions;
  }
  render() {
    const favesArray = Array.from(this.props.faves);
    return (
      <Query query={sessionQuery}>
        {({loading, error, data}) => {
          if (loading) return <LoadingWheel />;
          if (error) return <Text>Error :(</Text>;
          
          const faveSessions = this.compareFaves(this.props.faves, data.allSessions)
          const sortedData = formatSessionData(faveSessions);
          console.log(sortedData);

          return (
            <SectionList
              renderItem={({ item, index, section }) => (
                <ScheduleList 
                  item={item} 
                  index={index} 
                  section={section} 
                  nav={this.props.navigation}
                  fav={faveSessions.find(fave => fave.id === item.id)}
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
          )
        }}
      </Query>
    );
  }
}

export default connect(state => ({
  faves: state.faveData.faves
}))(FavesContainer);
