import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

// import Container from './Container';
import ProfileInfo from './ProfileInfo';
import ObservationList from './ObservationList';
// import Header from './Header';

import axios from 'axios';

export default class ProfilePage extends Component {

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

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: 0,
  },
  profileInfo: {
    borderWidth: 1,
    borderColor: '#aaa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#999'
  },
  obsList: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#aaa',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

ProfilePage.propTypes = {
  navigation: PropTypes.object,
}