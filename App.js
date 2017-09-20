import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import  PropTypes from 'prop-types';

import Login from './components/Login';
import ProfileScreen from './components/ProfilePage';
import MapScreen from './components/MapScreen';


class App extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Login style={styles.login } navigate={navigate}/>
      </View>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  })
};



const SimpleApp = TabNavigator({
  Home: { screen: ProfileScreen },
  Map: { screen: MapScreen },
  Notifications: { screen: App },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});

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

export default SimpleApp;
