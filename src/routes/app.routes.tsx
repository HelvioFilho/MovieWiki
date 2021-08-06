import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Favorites, Home, Search, Watch } from '../screens';
import { BottomBar } from '../components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabBarOptions, BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export type BottomTabBarProps = BottomTabBarOptions & {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

function BottomRoute() {
  const Tabs = createBottomTabNavigator<ParamListBase>();
  return (
    <Tabs.Navigator
      tabBar={(props: BottomTabBarProps) => (
        <BottomBar {...props} />
      )}>
      <Tabs.Screen
        name="Home"
        component={Home} />
      <Tabs.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={Search}
      />
      <Tabs.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={Favorites}
      />
    </Tabs.Navigator>
  )
}


export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();
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