import {StyleSheet} from 'react-native';
import {LIGHT_GREY, DARK_GREY} from '../../styles/common';

const styles = StyleSheet.create({
  button: {
    height: 75,
    width: '100%',
    backgroundColor: LIGHT_GREY,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  thumbnail: {
    height: 50,
    width: 50,
    backgroundColor: DARK_GREY,
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
    color: DARK_GREY
  }
});

export default styles;