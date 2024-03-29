import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';

import Counter from './Counter';
import store from '../redux/Store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFD',
  },
});

export default function () {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
}
