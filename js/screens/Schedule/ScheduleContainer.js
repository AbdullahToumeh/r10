import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Schedule from './Schedule';

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
