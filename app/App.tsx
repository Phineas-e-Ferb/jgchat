import {
  useFonts,
  Exo_700Bold,
  Exo_400Regular,
  Exo_300Light,
} from "@expo-google-fonts/exo";
import AppLoading from "expo-app-loading";
import { UserProvider } from "./contexts/userContext";
import { MessageProvider } from "./contexts/messageContext";
import React from "react";
import Routes from "./Routes";


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
      <MessageProvider>
        <Routes />
      </MessageProvider>
    </UserProvider>
  );
}
