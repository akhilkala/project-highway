import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Router from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      <Toast autoHide visibilityTime={2600} />
    </NavigationContainer>
  );
}
