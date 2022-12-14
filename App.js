import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import cesta from "./src/mocks/cesta";
import Cesta from './src/telas/index';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...cesta} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

