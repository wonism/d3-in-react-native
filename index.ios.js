/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ART,
  Text,
  View
} from 'react-native';
import GraphWrapper from './App/GraphWrapper';

const { Surface, Group, Shape } = ART;
const data = [{
  time: (new Date(2017, 5, 27)).getTime() / 1000,
  open: 120,
  high: 121,
  low: 119,
  close: 120.5,
  data: 10,
}, {
  time: (new Date(2017, 5, 28)).getTime() / 1000,
  open: 121,
  high: 122,
  low: 120,
  close: 120,
  data: 50,
}, {
  time: (new Date(2017, 5, 29)).getTime() / 1000,
  open: 119,
  high: 125,
  low: 100,
  close: 124,
  data: 10,
}, {
  time: (new Date(2017, 5, 30)).getTime() / 1000,
  open: 120,
  high: 122,
  low: 120,
  close: 122,
  data: 30,
}];

export default class BitcoinExchange extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GraphWrapper data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('BitcoinExchange', () => BitcoinExchange);
