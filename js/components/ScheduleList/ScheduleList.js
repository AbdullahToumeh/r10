import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';
import colourStyles from '../../config/styles';

const ScheduleList = props => (
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
        {props.fav && (
          <Icon
            name="md-heart"
            size={15}
            color={colourStyles.red}
            style={styles.heart}
          />
        )}
      </View>
    </TouchableOpacity>
  </View>
);

ScheduleList.defaultProps = {
  fav: null
};

ScheduleList.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])).isRequired,
  nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired,
  fav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
};

export default ScheduleList;
