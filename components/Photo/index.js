import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const Photo = props => (
  <View>
    <Image
      style={styles.image}
      source={props.src} />
  </View>
);

Photo.propTypes = {
  src: PropTypes.shape({
    uri: PropTypes.string,
  }),
};

export default Photo;