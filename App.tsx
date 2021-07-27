import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';
import { CustomText, Logo } from './src/components';
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black
} from '@expo-google-fonts/source-sans-pro';

import { defaultTheme } from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';

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
      <View style={styles.container}>
        <Logo />
        <CustomText>Apenas um texto</CustomText>
        {/* <Text>Apenas um texto</Text> */}
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
