import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import myCupons from "../screens/myCupons";
import cupons from "../screens/cupons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function () {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: { fontWeight: "bold" },
        indicatorStyle: { backgroundColor: "#ff8200" },
        style: { backgroundColor: "#111", paddingTop: insets.top },
      }}
    >
      <Tab.Screen
        name="Cupons"
        options={{ tabBarLabel: "Kuponer" }}
        component={cupons}
      />
      <Tab.Screen
        name="MyCupons"
        options={{ tabBarLabel: "Mine Kuponer" }}
        component={myCupons}
      />
    </Tab.Navigator>
  );
}
