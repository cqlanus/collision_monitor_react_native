import React from 'react';
import { View } from 'react-native';
import ObservationListItem from '../ObservationListItem';
import PropTypes from 'prop-types';

const ObservationList = props => (
  <View style={props.styles}>
    {
      props.observations && props.observations.map(observation => (
        <ObservationListItem
          goTo={props.goTo}
          key={observation.id}
          observation={observation}
        ></ObservationListItem>
      ))
    }
  </View>
);

export default ObservationList;

ObservationList.propTypes = {
  observations: PropTypes.array,
  styles: View.propTypes.style,
  goTo: PropTypes.func,
};