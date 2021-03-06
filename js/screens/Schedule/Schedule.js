import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, SectionList, View } from 'react-native';
import Moment from 'moment';

import ScheduleList from '../../components/ScheduleList';
import LoadingWheel from '../../components/LoadingWheel';

import { formatSessionData, compareFaves } from '../../lib/functions';

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

Schedule.propTypes = {
  faves: PropTypes.objectOf(PropTypes.object).isRequired,
  nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired
};

export default connect(state => ({
  faves: state.faveData.faves
}))(Schedule);
