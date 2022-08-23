import React, { ReactElement, useEffect } from "react";
import HomeStack from "./home.stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Router(): ReactElement {
  return (
    <SafeAreaProvider>
      <HomeStack />
    </SafeAreaProvider>
  );
}
