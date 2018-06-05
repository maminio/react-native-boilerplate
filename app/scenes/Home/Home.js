import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>This is home</Text>
        <Button
          title="Go to View2"
          onPress={() => {
            this.props.navigation.navigate('View2');
          }}
        />
      </View>
    );
  }
}

export default Home;
