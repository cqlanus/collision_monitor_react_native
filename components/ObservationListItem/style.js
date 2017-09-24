import { StyleSheet } from 'react-native';
import {LIGHT_GREY, MEDIUM_GREY} from '../../styles/common';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: LIGHT_GREY,
    borderBottomWidth: 1
  },
  thumbnail: {
    height: 50,
    width: 50,
    backgroundColor: MEDIUM_GREY,
    margin: 5
  },
  details: {
    paddingLeft: 10
  },
  species: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  location: {
    fontSize: 17,
    color: MEDIUM_GREY
  }
});

export default styles;