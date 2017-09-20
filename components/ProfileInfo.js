import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ProfileInfo = ({styles, numObservations}) => (
  <View style={styles}>
    <View style={stylesObj.thumbnail}>
    </View>
    <View style={stylesObj.observations}>
      <Text style={{fontSize: 30, color: 'white'}}>{numObservations} Observations</Text>
    </View>
  </View>
);

export default ProfileInfo;

const stylesObj = StyleSheet.create({
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

ProfileInfo.propTypes = {
  styles: View.propTypes.style,
  numObservations: PropTypes.number,
};