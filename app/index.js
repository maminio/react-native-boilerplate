/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import Scenes from 'app/scenes';
import configureStore from './config/store';


// eslint-disable-next-line no-unused-vars
import styles from './styles';


const Navigator = createStackNavigator(Scenes, { initialRouteName: 'Home' });


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      // TODO: CHANGE
      <Navigator />
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const AppCompose = connect(mapStateToProps, mapDispatchToProps)(App);


// eslint-disable-next-line react/no-multi-comp
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
