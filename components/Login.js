import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';

import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  press() {
    this.requestLogin();
  }

  dummyPress() {

  }

  requestLogin = async () => {
    try {
      let response = await axios.post('http://192.168.1.67:8000/auth/login', this.state)
      let result = await response.data;
      console.log('result is:', result);
    } catch(err) { console.error(err)}
  }

  handleChangeEmail(text) {
    this.setState({
      email: text.toLowerCase()
    })
  }

  handleChangePass(text) {
    this.setState({
      password: text
    })
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Container>
          <Button
            label="Forgot Login/Pass"
            styles={{button: styles.alignRight, label: styles.label}}
            onPress={this.dummyPress.bind(this)} />
        </Container>

        <Container>
          <Label text="Email" />
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            onChangeText={this.handleChangeEmail.bind(this)}
            keyboardType="email-address"
          />
        </Container>

        <Container>
          <Label text="Password" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            value={this.state.password}
            onChangeText={this.handleChangePass.bind(this)}
          />
        </Container>

        <Container>
          <Button
            styles={{button: styles.transparentButton}}
            onPress={this.dummyPress.bind(this)}
          >
            <View style={styles.inline}>
              <Icon name="google" size={30} color="#4885ed" />
              <Text style={[styles.buttonBlueText, styles.buttonBigText]}> Login </Text>
              <Text style={styles.buttonBlueText}>with Google</Text>
            </View>
          </Button>
        </Container>

        <View style={styles.footer}>
          <Container>
            <Button
              label='Sign In'
              styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
              onPress={this.press.bind(this)} />
          </Container>


          <Container>
            <Button
              label='Cancel'
              styles={{label: styles.buttonBlackText}}
              onPress={this.dummyPress.bind(this)} />
          </Container>
        </View>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  },
  transparentButton: {
    marginTop: 30,
    borderColor: '#4885ed',
    borderWidth: 2
  },
  buttonBlueText: {
    fontSize: 20,
    color: '#4885ed'
  },
  buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inline: {
    flexDirection: 'row'
  },

  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
  },

  buttonBlackText: {
    fontSize: 20,
    color: '#595856'
  },
  primaryButton: {
    backgroundColor: '#34a853'
  },
  footer: {
    marginTop: 10
  }
})