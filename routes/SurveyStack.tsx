import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Surveys from "../screens/surveys";
import Survey from "../screens/survey";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="Surveys"
      screenOptions={{
        headerBackTitle: "Tilbage",
        headerTintColor: "#fff",
        headerStyle: {
          shadowColor: "#111",
          backgroundColor: "#111",
        },
      }}
    >
      <Stack.Screen
        name="Surveys"
        component={Surveys}
        options={{
          title: "Spørgeskemaer",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Survey"
        component={Survey}
        options={({ route }: any) => ({
          headerTitle: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}
