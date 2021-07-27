import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';
import { CustomText, Logo } from './src/components';

import { defaultTheme } from './src/global/styles/theme';

export default function App() {
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
