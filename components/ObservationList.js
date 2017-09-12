import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Container from './Container';
import ObservationListItem from './ObservationListItem';

const ObservationList = props => (
  <View style={props.styles}>
  {
    props.observations && props.observations.map(observation => (
      <ObservationListItem
        key={observation.id}
        observation={observation}
      ></ObservationListItem>
    ))
  }
  </View>
)

export default ObservationList;