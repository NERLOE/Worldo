import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../screens/profile";
import Settings from "../screens/settings";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function () {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: { fontWeight: "bold" },
        indicatorStyle: { backgroundColor: "#e02828" },
        style: { backgroundColor: "#111", paddingTop: insets.top },
      }}
    >
      <Tab.Screen
        name="Profile"
        options={{ tabBarLabel: "Profil" }}
        component={Profile}
      />
      <Tab.Screen
        name="Settings"
        options={{ tabBarLabel: "Indstillinger" }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}
