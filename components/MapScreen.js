import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';

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
    )
  }
}

const styles = StyleSheet.create({

})