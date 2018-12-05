import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './app/components/HomeScreen';
import Register from './app/components/Register';
import SignIn from './app/components/SignIn';
import AboutUs from './app/components/AboutUs';

export default class App extends Component {
  render() {
    return (
     <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator ({
  Home : HomeScreen,
  Reg : Register,
  Signin : SignIn,
  About: AboutUs, 
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#039BE5',
  },
});
