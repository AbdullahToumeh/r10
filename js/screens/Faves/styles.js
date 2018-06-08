import { StyleSheet, Platform } from 'react-native';
import colourStyles, { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: colourStyles.mediumgray
  },
  sectionHeader: {
    fontWeight: 'bold',
    backgroundColor: colourStyles.mediumgray,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
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
