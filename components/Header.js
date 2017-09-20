import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Header = props => (
  <View style={props.styles.container}>
    <Text style={props.styles.text}>{props.children}</Text>
  </View>
);

export default Header;

Header.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any,
};