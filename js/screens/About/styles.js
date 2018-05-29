import { StyleSheet } from 'react-native';
import colourStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  conductTitle: {
    color: colourStyles.purple,
    marginBottom: 10
  },
  imageHeader: {
    paddingBottom: 20,
    margin: 20,
    borderBottomColor: colourStyles.lightgray,
    borderBottomWidth: 1,
    width: '90%',
    alignItems: 'center'
  },
  conductContent: {
    margin: 10
  },
  singleConduct: {
    marginBottom: 20
  }
});

export default styles;
