import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";
import Onboarding from "../screens/Onboarding";
import TransactionHistory from "../screens/TransactionHistory";
import InputExpense from "../screens/InputExpense";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} options={{ headerShown: false }} />
      <Stack.Screen name="InputExpense" component={InputExpense} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
