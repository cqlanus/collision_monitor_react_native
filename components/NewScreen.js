import React, {Component} from 'react';
import {View, Text } from 'react-native';

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
    );
  }
}