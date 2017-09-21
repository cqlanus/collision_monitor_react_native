import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ObservationListItem = props => (
  <View
    style={styles.flex}
  >
    <View style={styles.thumbnail}></View>
    <View style={styles.details}>
      <Text
        style={styles.species}
        onPress={() => props.goTo(props.observation.collision.species)}
      >{props.observation.collision.species.name}</Text>
      <Text style={styles.location}>{props.observation.place.name}</Text>
    </View>
  </View>
);

export default ObservationListItem;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  thumbnail: {
    height: 50,
    width: 50,
    backgroundColor: '#999',
    margin: 5
  },
  details: {
    paddingLeft: 10
  },
  species: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  location: {
    fontSize: 17,
    color: '#999'
  }
});

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
}