import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import fb from './screens/fb'
import Insta from './screens/in'


export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen:fb},
  Instagram : {screen:Insta}
})

const AppContainer = createAppContainer(TabNavigator)