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
// import Chart from 'react-native-chart';

const { Surface, Group, Shape } = ART;

export default class BitcoinExchange extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Surface width={500} height={500}>
          <Group x={100} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('BitcoinExchange', () => BitcoinExchange);
