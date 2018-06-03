import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Schedule from './Schedule';

import { formatSessionData } from '../../lib/functions';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingWheel from '../../components/LoadingWheel';

class ScheduleContainer extends Component {
  render() {
    return (
      <View>
        <Schedule nav={this.props.navigation} />
      </View>
    );
  }
}

export default ScheduleContainer;
