import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

const Container = props => {
  return (
    <View style={styles.labelContainer}>
      { props.children }
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 20
  }
});

export default Container;

Container.propTypes = {
  children: PropTypes.any,
};