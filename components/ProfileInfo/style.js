import {StyleSheet} from 'react-native';
import {DARK_GREY} from '../../styles/common';

const stylesObj = StyleSheet.create({
  thumbnail: {
    borderColor: '#fff',
    borderRadius: 150,
    borderWidth: 4,
    height: 100,
    width: 100,
    backgroundColor: DARK_GREY
  },
  observations: {
    paddingLeft: 30,
    justifyContent: 'center',
  }
});

export default stylesObj;