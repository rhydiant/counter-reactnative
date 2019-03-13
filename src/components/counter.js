/* eslint-disable react/destructuring-assignment */
// @flow

import React from 'react';
import { Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import increment from '../redux/ActionCreators';

type Props = {
  counter: number,
  increment: any,
};

export function Counter(props: Props) {
  const { counter } = props;
  return (
    <View>
      <Text>{`count is ${counter}`}</Text>
      <Button title="increment" onPress={props.increment} />
    </View>
  );
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
