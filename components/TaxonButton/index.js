import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const TaxonButton = props => (
  <TouchableHighlight
    underlayColor={'red'}
    style={styles.button}
  >
    <View style={styles.flex}>
      <View style={styles.thumbnail}></View>

      <View style={styles.details}>
        <Text
          style={styles.species}
        >{props.taxon.name}</Text>
        <Text style={styles.location}>{props.taxon.name}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

TaxonButton.propTypes = {

};

export default TaxonButton;