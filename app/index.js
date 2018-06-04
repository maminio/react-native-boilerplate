/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import configureStore from './config/store';
// Style
import styles from './styles';


class App extends Component {

  componentWillMount(){}

  componentDidMount(){}


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    )
  }
}



const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const AppCompose = connect(mapStateToProps, mapDispatchToProps)(App);


export default class BeeApp extends Component {
  // static propTypes = {}
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { store } = configureStore();
    return (
      <Provider store={store}>
        <AppCompose />
      </Provider>

    );
  }
}
