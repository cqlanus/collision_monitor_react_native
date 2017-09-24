import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';

import Header from '../Header';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          styles={{container: styles.container, text: styles.text}}
        >MapView</Header>
        <MapView
          style={{
            flex: 1
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}