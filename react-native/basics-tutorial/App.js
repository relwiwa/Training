import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import Bananas from './Components/Bananas';
import Greeting from './Components/Greeting';
import HelloWorld from './Components/HelloWorld';

export default class App extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <HelloWorld />
        <Bananas />
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    );
  }
}
