import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Container from './Container';
import Header from './Header';

export default class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
  }
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
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