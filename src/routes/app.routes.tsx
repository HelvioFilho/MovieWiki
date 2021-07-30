import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Home } from '../screens';
const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Detail"
        component={Detail}
      />
    </Navigator>
  );
}