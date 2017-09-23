import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';

import Container from './Container';
import Header from './Header';

export default class MapScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Header
            styles={{container: styles.container, text: styles.text}}
          >MapView</Header>
        </Container>
        <View style={styles.mapView}></View>
      </ScrollView>
    );
  }
}