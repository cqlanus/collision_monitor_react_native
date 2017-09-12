import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Container from './Container';

const ObservationListItem = props => (
  <View style={styles.flex}>
    <View style={styles.thumbnail}></View>
    <View style={styles.details}>
      <Text style={styles.species}>{props.observation.collision.species.name}</Text>
      <Text style={styles.location}>{props.observation.place.name}</Text>
    </View>
  </View>
)

export default ObservationListItem;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  thumbnail: {
    height: 50,
    width: 50,
    backgroundColor: '#999',
    margin: 5
  },
  details: {
    paddingLeft: 10
  },
  species: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  location: {
    fontSize: 17,
    color: '#999'
  }
})