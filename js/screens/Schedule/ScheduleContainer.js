import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
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

ScheduleContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired
};

export default ScheduleContainer;
