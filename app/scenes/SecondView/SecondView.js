import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SecondView extends Component {
  static navigationOptions = {
    title: 'View 2',
  }
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>This is the second view</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default SecondView;
