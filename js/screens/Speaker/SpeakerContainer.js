import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

// HOW TO NAVIGATE TO WIKIPEDIA PAGE?

class SpeakerContainer extends Component {
  render() {
    const {
      name, bio, image, url
    } = this.props.navigation.state.params;
    return (
      <View style={styles.background}>
        <Icon
          name="md-close'"
          size={30}
          color="white"
          style={styles.close}
          onPress={() => this.props.navigation.pop()}
        />
        <Text style={styles.header}>About the Speaker</Text>
        <View style={styles.container}>
          <ScrollView>
            <Image source={{ uri: image }} style={styles.personImage} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(url)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired
};

export default SpeakerContainer;
