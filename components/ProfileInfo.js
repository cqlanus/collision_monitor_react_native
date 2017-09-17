import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileInfo = props => (
  <View style={props.styles}>
    <View style={styles.thumbnail}>
    </View>
    <View style={styles.observations}>
      <Text style={{fontSize: 30, color: 'white'}}>{props.numObservations} Observations</Text>
    </View>
  </View>
);

export default ProfileInfo;

const styles = StyleSheet.create({
  thumbnail: {
    borderColor: '#fff',
    borderRadius: 150,
    borderWidth: 4,
    height: 100,
    width: 100,
    backgroundColor: '#444'
  },
  observations: {
    paddingLeft: 30,
    justifyContent: 'center',
  }
});