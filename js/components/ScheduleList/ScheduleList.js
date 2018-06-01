import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ScheduleList = (props) => {
  return (
    <View key={props.index} style={styles.singleEvent}>
      <TouchableOpacity
        onPress={() =>
          props.nav.navigate('Session', {
            title: props.item.title,
            description: props.item.description,
            time: props.item.startTime,
            location: props.item.location,
            speaker: props.item.speaker,
            id: props.item.id
          })
        }
      >
        <View>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.location}>{props.item.location}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default ScheduleList;