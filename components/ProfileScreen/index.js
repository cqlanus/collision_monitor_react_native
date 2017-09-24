import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

// import Container from '../Container';
import ProfileInfo from '../ProfileInfo';
import ObservationList from '../ObservationList';
// import Header from '../Header';

import axios from 'axios';

export default class ProfileScreen extends Component {

  constructor() {
    super();
    this.state = {
      observations: [],
      me: {}
    };
    this.goToObservationPage = this.goToObservationPage.bind(this);
  }

  componentDidMount() {
    this.requestObservations();
    this.whoAmI();
  }

  requestObservations() {
    axios.get('http://192.168.1.67:8000/api/observations')
      .then(res => res.data)
      .then(observations => {
        // console.log(observations);
        this.setState({observations});
      })
      .catch(console.error);
  }

  whoAmI() {
    axios.get('http://192.168.1.67:8000/auth/me')
      .then(res => res.data)
      .then(me => {
        console.log('who am i?', me);
        this.setState({me});
      })
      .catch(console.error);
  }

  goToObservationPage(species) {
    this.props.navigation.navigate('Observation', {...species});
  }


  render() {
    return (
      <ScrollView style={styles.scroll}>

        <View>
          <ProfileInfo
            styles={styles.profileInfo}
            numObservations={this.state.observations.length}
          ></ProfileInfo>
        </View>
        <View>
          <ObservationList
            observations={this.state.observations}
            goTo={this.goToObservationPage}
            styles={styles.obsList}
          ></ObservationList>
        </View>
      </ScrollView>
    );
  }
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};