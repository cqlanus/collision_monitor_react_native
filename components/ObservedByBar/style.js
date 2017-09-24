import {StyleSheet} from 'react-native';
import {MEDIUM_GREY} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  thumbnail: {
    backgroundColor: MEDIUM_GREY,
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  username: {
    fontSize: 20,
    paddingHorizontal: 15
  },
  date: {
    fontSize: 16,
    color: MEDIUM_GREY,
  }
});

export default styles;