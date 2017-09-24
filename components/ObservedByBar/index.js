import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const ObservedByBar = props => (
  <View style={styles.wrapper}>
    <View style={styles.thumbnail}></View>
    <Text style={styles.username}>{props.username}</Text>
    <Text style={styles.date} >{props.observedOn}</Text>
  </View>
);

ObservedByBar.propTypes = {
  username: PropTypes.string,
  observedOn: PropTypes.string,
};

export default ObservedByBar;