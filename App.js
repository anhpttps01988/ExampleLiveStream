import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './component/HomeScreen'
import SetupScreen from './component/SetupScreen'
import LiveStreamScreen from './component/LiveStreamScreen'
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  LiveStream: {screen: LiveStreamScreen},
  Setup: {screen: SetupScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
