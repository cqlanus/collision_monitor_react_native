import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Container = props => {
  return (
    <View style={styles.labelContainer}>
      { props.children }
    </View>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.any,
};