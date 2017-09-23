import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Label = props => {
  return (
    <Text
      style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}
    >
      {props.text}
    </Text>
  );
};

export default Label;

Label.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired,
};