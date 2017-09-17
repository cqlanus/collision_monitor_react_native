import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
  }
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView>
        <Text>This is a map page</Text>
      </ScrollView>
    );
  }
}