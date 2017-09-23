import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  thumbnail: {
    height: 50,
    width: 50,
    backgroundColor: '#999',
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
    color: '#999'
  }
});

export default styles;