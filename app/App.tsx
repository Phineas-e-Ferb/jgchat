import {
  useFonts,
  Exo_700Bold,
  Exo_400Regular,
  Exo_300Light,
} from "@expo-google-fonts/exo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import React from "react";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import ChatList from "./screens/ChatList";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Exo_300Light,
    Exo_400Regular,
    Exo_700Bold,
  });
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ChatList" component={ChatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
