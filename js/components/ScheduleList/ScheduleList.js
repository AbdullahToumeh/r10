import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colourStyles from '../../config/styles';

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
          {props.fav && <Icon name={'md-heart'} size={15} color={colourStyles.red} style={styles.heart}/>}
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default ScheduleList;