import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Moment from 'moment';
import { connect } from 'react-redux';
import { createTheFave, deleteTheFave } from '../../redux/modules/faves';
import Icon from 'react-native-vector-icons/Ionicons';
import colourStyles from '../../config/styles';

import styles from './styles';

class SessionContainer extends Component {
  render() {
    const {
      description,
      title,
      time,
      location,
      speaker,
      id
    } = this.props.navigation.state.params;
    const isFav = Array.from(this.props.faves).find(fave => fave.id === id);
    return (
      <View style={styles.session}>
        {isFav && <Icon name={'md-heart'} size={15} color={colourStyles.red} style={styles.heart}/>}
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.event}>{title}</Text>
        <Text style={styles.time}>{Moment(time).format('h:mm A')}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.location}>Presented by:</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push('Speaker', {
              name: speaker.name,
              image: speaker.image,
              bio: speaker.bio,
              url: speaker.url
            })
          }
        >
          <View style={styles.speaker}>
            {speaker && (
              <Image source={{ uri: speaker.image }} style={styles.image} />
            )}
            <Text style={styles.speakerName}>{speaker && speaker.name}</Text>
          </View>
        </TouchableOpacity>
        {isFav ? (
          <TouchableOpacity
            onPress={() => this.props.dispatch(deleteTheFave(id))}
            style={styles.favesButton}
          >
            <Text style={styles.buttonText}>Remove from Faves</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => this.props.dispatch(createTheFave(id))}
            style={styles.favesButton}
          >
            <Text style={styles.buttonText}>Add to Faves</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default connect(state => ({
  faves: state.faveData.faves
}))(withNavigation(SessionContainer));
