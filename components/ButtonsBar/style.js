import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 50
  },
  button: {
    flex: 1,
    borderColor: PRIMARY_COLOR,
    borderBottomWidth: 3,
  },
  label: {
    color: PRIMARY_COLOR,
  }
});

export default styles;