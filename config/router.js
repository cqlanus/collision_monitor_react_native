/* eslint react/prop-types: 0, react/display-name: 0, */

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../components/LoginScreen';
import ProfileScreen from '../components/ProfileScreen';
import MapScreen from '../components/MapScreen';

import ObservationScreen from '../components/ObservationScreen';

export const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile'
    }
  },
  Observation: {
    screen: ObservationScreen,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
    })
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="th-list" size={25} color={tintColor} />
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="map" size={25} color={tintColor} />
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => <Icon name="sign-in" size={25} color={tintColor} />
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
});
