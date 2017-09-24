import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import styles from './style';

const ButtonsBar = props => (
  <View style={styles.container}>
    <Button
      label={'Button 1'}
      onPress={() => console.log('button 1')}
      styles={styles}
    />
    <Button
      label={'Button 2'}
      onPress={() => console.log('button 2')}
      styles={styles}
    />
  </View>
);

export default ButtonsBar;