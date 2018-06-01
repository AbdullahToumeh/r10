import { StyleSheet, Platform } from 'react-native';
import colourStyles, { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colourStyles.purple,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 10,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  }
});

export default styles;
