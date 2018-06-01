import { StyleSheet, Platform } from 'react-native';
import colourStyles, { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
  location: {
    color: colourStyles.mediumgray,
    fontWeight: 'bold',
    marginBottom: 15,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  time: {
    color: colourStyles.red,
    fontWeight: 'bold',
    marginBottom: 15,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  event: {
    fontWeight: 'bold',
    marginBottom: 15,
    fontSize: 30,
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  session: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  description: {
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    }),
    fontWeight: '200',
    fontSize: 15,
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colourStyles.mediumgray,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  speakerName: {
    fontWeight: 'bold',
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    })
  },
  favesButton: {
    backgroundColor: colourStyles.blue,
    padding: 10,
    borderRadius: 25,
    width: '50%',
    alignSelf: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  heart: {
    position: 'absolute',
    right: 10
  }
});

export default styles;
