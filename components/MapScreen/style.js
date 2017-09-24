import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  scroll: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  mapView: {
    backgroundColor: '#999',
    height: 800,
    width: '100%',
  }
});

export default styles;