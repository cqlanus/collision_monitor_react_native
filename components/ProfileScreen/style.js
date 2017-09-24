import {StyleSheet} from 'react-native';
import {MEDIUM_GREY} from '../../styles/common';

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: 0,
  },
  profileInfo: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: MEDIUM_GREY,
  },
  obsList: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;