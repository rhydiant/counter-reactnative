/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  state = {
    counter: 0,
  };

  increment() {
    this.setState(previousState => ({
      counter: previousState.counter + 1,
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>count is {this.state.counter}</Text>
        <Button
          title="increment"
          onPress={() => {
            this.increment();
          }}
        />
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
