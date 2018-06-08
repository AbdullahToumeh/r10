import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import { formatSessionData, compareFaves } from '../../lib/functions';
import LoadingWheel from '../../components/LoadingWheel';
import ScheduleList from '../../components/ScheduleList';

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
  render() {
    return (
      <Query query={sessionQuery}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingWheel />;
          if (error) return <Text>Error :(</Text>;

          const faveSessions = compareFaves(
            this.props.faves,
            data.allSessions
          );
          const sortedData = formatSessionData(faveSessions);

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
          );
        }}
      </Query>
    );
  }
}

FavesContainer.propTypes = {
  faves: PropTypes.objectOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default connect(state => ({
  faves: state.faveData.faves
}))(FavesContainer);
