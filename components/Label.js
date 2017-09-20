import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Label = props => {
  return (
    <Text
      style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}
    >
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856'
  }
});

export default Label;

Label.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired,
};