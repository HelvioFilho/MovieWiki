import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BarItem, BottomBarContainer } from './styles';
import { CustomText } from '../../atoms';
import { defaultTheme } from '../../../global/styles/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const routeIcons: { [key: string]: string } = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

export function BottomBar({ state, navigation, descriptors }: BottomTabBarProps) {
  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            key={index}
            activeOpacity={.8}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Ionicons
              name={routeIcons[route.name] as React.ComponentProps<typeof Ionicons>['name']}
              size={defaultTheme.metrics.px(20)}
              color={isFocused ? defaultTheme.colors.red : defaultTheme.colors.white}
            />
            <CustomText
              fontFamily="semiBold"
              size={10}
              color={isFocused ? 'red' : 'white'}
            >
              {label}
            </CustomText>
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
}