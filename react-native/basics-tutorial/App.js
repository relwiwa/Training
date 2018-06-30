import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import Bananas from './Components/Bananas';
import Blink from './Components/Blink';
import Buttons from './Components/Buttons';
import FlexDimensions from './Components/FlexDimensions';
import FixedDimensions from './Components/FixedDimensions';
import FlexLayout from './Components/FlexLayout';
import Greeting from './Components/Greeting';
import HelloWorld from './Components/HelloWorld';
import LotsOfStyles from './Components/LotsOfStyles';
import PizzaTranslator from './Components/PizzaTranslator';
import Touchables from './Components/Touchables';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
{/*         <View style={{ alignItems: 'center' }}>
          <HelloWorld />
          <Bananas />
          <Greeting name="Rexxar" />
          <Greeting name="Jaina" />
          <Greeting name="Valeera" />
          <Blink text="Blink Blink" />
          <LotsOfStyles />
        </View>*/}
{/*         <FixedDimensions />
        <FlexDimensions />
        <FlexLayout />
        <PizzaTranslator /> */}
        <Buttons />
        <Touchables />
      </View>
    );
  }
}
