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
import SignIn from "./screens/SignIn";
import UserChatList from "./screens/UserChatList";
import { UserProvider } from "./contexts/userContext";

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
    <UserProvider>
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
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="UserChatList" component={UserChatList} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
