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
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    width: '90%'
  },
  conductTitle: {
    color: colourStyles.purple,
    marginBottom: 10
  },
  content: {
    width: '90%',
    marginBottom: 20
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
    borderBottomWidth: 1
  },
  singleConduct: {
    marginBottom: 20
  }
});

export default styles;
