import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';

import styles from './styles';

class SessionContainer extends Component {
  render() {
    const {
      description,
      title,
      time,
      location,
      speaker
    } = this.props.navigation.state.params;
    console.log(speaker);
    return (
      <View style={styles.session}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.event}>{title}</Text>
        <Text style={styles.time}>{Moment(time).format('h:mm A')}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text>Presented by:</Text>
        <Text>{speaker && speaker.name}</Text>
      </View>
    );
  }
}

export default withNavigation(SessionContainer);
