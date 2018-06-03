import { StyleSheet, Platform } from 'react-native';
import colourStyles, { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    width: '90%',
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  conductTitle: {
    color: colourStyles.purple,
    marginBottom: 10
  },
  content: {
    width: '90%',
    marginBottom: 20,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  imageHeader: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: colourStyles.lightgray,
    borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center'
  },
  conductContent: {
    width: '90%',
    borderBottomColor: colourStyles.lightgray,
    borderBottomWidth: 1,
    flex: 1
  },
  singleConduct: {
    marginBottom: 20,
    overflow: 'hidden',
    zIndex: 1
  },
  description: {
    height: 'auto'
  }
});

export default styles;
