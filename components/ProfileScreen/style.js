import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: 0,
  },
  profileInfo: {
    borderWidth: 1,
    borderColor: '#aaa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#999'
  },
  obsList: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#aaa',
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