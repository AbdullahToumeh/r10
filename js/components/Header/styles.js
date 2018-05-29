import { StyleSheet } from 'react-native';
import colourStyles from '../../config/styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colourStyles.purple,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 10
  }
});

export default styles;
