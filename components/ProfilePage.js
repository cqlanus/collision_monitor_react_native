import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ProfileInfo from './ProfileInfo';
import ObservationList from './ObservationList';

import axios from 'axios';

export default class ProfilePage extends Component {
  static navigationOptions = {
    tabBarLabel: 'Me',
  }
  constructor() {
    super();
    this.state = {
      observations: [],
    }
  }

  componentDidMount() {
    this.requestObservations();
  }

  requestObservations() {
    axios.get('http://192.168.1.67:8000/api/observations')
    .then(res => res.data)
    .then(observations => {
      // console.log(observations);
      this.setState({observations})
    })
    .catch(console.error);
  }


  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Text>This is a profile page</Text>
        </Container>
        <View>
          <ProfileInfo
            styles={styles.profileInfo}
            numObservations={this.state.observations.length}
          ></ProfileInfo>
        </View>
        <View>
          <ObservationList observations={this.state.observations} styles={styles.obsList}></ObservationList>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    paddingTop: 30,
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
  }
})