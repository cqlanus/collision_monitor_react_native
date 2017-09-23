import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import stylesObj from './style';

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

ProfileInfo.propTypes = {
  styles: View.propTypes.style,
  numObservations: PropTypes.number,
};