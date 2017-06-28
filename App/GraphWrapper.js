import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Graph from './Graph';

export default class GraphWrapper extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { data } = this.props;

    const graphProps = {
      data,
      xAccessor: d => new Date(d.time * 1000),
      yAccessor: d => d.data,
    };

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Graph {...graphProps} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
