import { StyleSheet, Platform } from 'react-native';
import colourStyles from '../../config/styles';

const styles = StyleSheet.create({
  favesButton: {
    backgroundColor: colourStyles.blue,
    padding: 10,
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  gradientButton: {
    ...Platform.select({
      android: {
        width: '100%',
        borderRadius: 25
      },
      ios: {
        width: '111%',
        borderRadius: 25
      }
    })
  }
});

export default styles;
