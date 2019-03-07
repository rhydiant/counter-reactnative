import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import increment from '../redux/actions';

class Counter extends Component {
  render() {
    console.log(`rendering Counter, props is ${JSON.stringify(this.props)}`);
    return (
      <View>
        <Text>count is {this.props.counter}</Text>
        <Button title="increment" onPress={this.props.increment} />
      </View>
    );
  }
}

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  increment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
