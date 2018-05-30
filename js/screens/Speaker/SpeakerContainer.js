import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SpeakerContainer extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <Text>THIS IS FOR THE SPEAKER</Text>
      </View>
    );
  }
}

export default SpeakerContainer;
