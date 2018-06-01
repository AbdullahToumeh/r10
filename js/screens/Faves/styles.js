import { StyleSheet } from 'react-native'; 
import colourStyles from '../../config/styles';

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
    fontFamily: 'Montserrat'
  }
});

export default styles;