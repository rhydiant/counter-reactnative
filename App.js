import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';

import Counter from './src/components/counter';
import store from './src/redux/store';

class App extends Component {
  render() {
    console.log('render App');
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
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

export default App;
