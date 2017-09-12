import React, {Component} from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

export default class ChatScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'Notifications',
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={{paddingTop: 50}}>
        <Text style={{fontSize: 25}}>Chat with Chris</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})