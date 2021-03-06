import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const ObservationListItem = props => (
  <TouchableHighlight
    onPress={() => props.goTo(props.observation.collision.species)}
    underlayColor={'#ccc'}
  >
    <View style={styles.flex}>
      <View style={styles.thumbnail}></View>

      <View style={styles.details}>
        <Text
          style={styles.species}
        >{props.observation.collision.species.name}</Text>
        <Text style={styles.location}>{props.observation.place.name}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default ObservationListItem;

ObservationListItem.propTypes = {
  observation: PropTypes.shape({
    collision: PropTypes.shape({
      species: PropTypes.shape({
        name: PropTypes.string
      })
    }),
    place: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  goTo: PropTypes.func,
};