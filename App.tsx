import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black
} from '@expo-google-fonts/source-sans-pro';

import { defaultTheme } from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (

    <ThemeProvider theme={defaultTheme}>
      <StatusBar backgroundColor={'transparent'} barStyle="light-content" translucent={true} />
      <Routes />
    </ThemeProvider>
  );
}

