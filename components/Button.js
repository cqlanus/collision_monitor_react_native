import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = props => {
  function getContent() {
    if (props.children) {
      return props.children;
    }
    return <Text style={props.styles.label}>{props.label}</Text>;
  }
  return (
    <TouchableHighlight
      underlayColor="#ccc"
      onPress={props.onPress}
      style={[
        props.noDefaultStyles ? '' : styles.button,
        props.styles ? props.styles.button : ''
      ]}
    >
      { getContent() }
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  noDefaultStyles: PropTypes.bool,
  styles: PropTypes.object,
  children: PropTypes.any,
  label: PropTypes.string.isRequired
};

export default Button;