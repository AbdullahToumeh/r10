import React, { Component } from 'react';
import { View } from 'react-native';
import Schedule from './Schedule';

// Very aware that this should just contain the logic instead of Schedule.js, will refactor soon

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
