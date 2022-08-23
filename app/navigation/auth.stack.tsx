import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AuthStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Landing"
    >
      {/* <Stack.Screen name="Landing" component={Landing} /> */}
    </Stack.Navigator>
  );
}
