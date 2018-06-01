import { StyleSheet, Platform } from 'react-native';
import colourStyles, { fontStyles } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    }),
    marginBottom: 20,
    alignSelf: 'center'
  },
  bio: {
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    }),
    marginBottom: 20,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  background: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: colourStyles.purple,
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    ...Platform.select({
      android: {
        fontFamily: fontStyles.android
      },
      ios: {
        fontFamily: fontStyles.ios
      }
    }),
    fontSize: 15,
    textAlign: 'center'
  }
});

export default styles;
