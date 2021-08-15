import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Favorites, Home, Search, Watch } from '../screens';
import { BottomBar } from '../components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';

function BottomRoute() {
  const { Navigator, Screen } = createBottomTabNavigator<ParamListBase>();
  return (
    <Navigator
      tabBar={props => <BottomBar {...props} />}>
      <Screen
        name="Home"
        component={Home} />
      <Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={Search}
      />
      <Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  )
}

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator<ParamListBase>();
  return (
    <Navigator
      headerMode="none"
    >
      <Screen
        name="Home"
        component={BottomRoute}
      />
      <Screen
        name="Detail"
        component={Detail}
      />
      <Screen
        name="Watch"
        component={Watch}
      />
    </Navigator>
  );
}