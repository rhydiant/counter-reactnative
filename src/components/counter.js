/* eslint-disable react/destructuring-assignment */
// @flow

import React from 'react';
import { Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import increment from '../redux/actionCreators';

type Props = {
  counter: number,
  increment: any,
};

function Counter(props: Props) {
  // eslint-disable-next-line no-console
  console.log(`rendering Counter, props is ${JSON.stringify(props)}`);
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
