import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';
const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>

      <Screen
        name="Home"
        component={Home}
      />

    </Navigator>
  );
}