import React, { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLOR, FONTS } from "../app/constants";
import HomeScreen from "./screens/HomeScreen";
import Onboarding from "./screens/Onboarding";
import TransactionHistory from "./screens/TransactionHistory";
import InputExpense from "./screens/InputExpense";
import AppNavigator from "./navigations/AppNavigator";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        "Inter-Regular": FONTS.InterRegular,
        "Inter-Medium": FONTS.InterMedium,
        "Inter-SemiBold": FONTS.InterSemiBold,
        "Inter-Bold": FONTS.InterBold,
        "Inter-ExtraBold": FONTS.InterExtraBold,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
