import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import Router from "./navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
        <Toast autoHide visibilityTime={2600} />
      </Provider>
    </NavigationContainer>
  );
}
