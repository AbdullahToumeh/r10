import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';
import colourStyles from '../../config/styles';

const LinearGradientButton = (props) => (
  <TouchableOpacity
    onPress={props.buttonFunction}
    style={styles.favesButton}
  >
    <LinearGradient
      colors={[colourStyles.purple, colourStyles.blue]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, styles.gradientButton]}
    />
    <Text style={styles.buttonText}>{props.buttonText}</Text>
  </TouchableOpacity>
);

LinearGradientButton.propTypes = {
  buttonFunction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default LinearGradientButton;

