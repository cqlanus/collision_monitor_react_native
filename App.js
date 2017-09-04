import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login style={styles.login } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    marginBottom: 20
  }
});
