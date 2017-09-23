import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  },
  transparentButton: {
    marginTop: 30,
    borderColor: '#4885ed',
    borderWidth: 2
  },
  buttonBlueText: {
    fontSize: 20,
    color: '#4885ed'
  },
  buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inline: {
    flexDirection: 'row'
  },

  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
  },

  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34a853'
  },
  footer: {
    marginTop: 10
  }
});

export default styles;