import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitle: "Tilbage",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#111",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </Stack.Navigator>
  );
}
