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
