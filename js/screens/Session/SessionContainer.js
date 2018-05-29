import React, { Component } from 'react';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class SessionContainer extends Component {
  render() {
    const { description, title } = this.props.navigation.state.params;
    console.log(description);
    console.log(title);
    return <Text>Session</Text>;
  }
}

export default withNavigation(SessionContainer);
