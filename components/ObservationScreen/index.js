import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

class ObservationPage extends Component {
  constructor() {
    super();
  }

  render() {
    const species = this.props.navigation.state.params;
    console.log(this.props);
    return (
      <ScrollView style={styles.scroll}>
        <Text>This is an ObservationPage for {species.name}!</Text>
      </ScrollView>
    );
  }
}

ObservationPage.propTypes = {
  navigation: PropTypes.object,
};

export default ObservationPage;