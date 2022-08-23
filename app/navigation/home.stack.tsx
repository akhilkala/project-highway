import React, { ReactElement } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";

const Stack = createStackNavigator();

export default function HomeStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
