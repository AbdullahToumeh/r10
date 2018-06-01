import { StyleSheet, Platform } from 'react-native';
import colourStyles, { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
  location: {
    color: colourStyles.mediumgray,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  singleEvent: {
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  heart: {
    position: 'absolute',
    right: 15,
    bottom: 0
  }
});

export default styles;