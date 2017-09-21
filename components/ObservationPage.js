import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
});

ObservationPage.propTypes = {
  navigation: PropTypes.object,
}

export default ObservationPage;