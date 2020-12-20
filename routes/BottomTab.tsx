import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import SurveyStack from "./SurveyStack";
import HomeStack from "./HomeStack";
import CuponsTab from "./CuponsTab";
import ProfileTab from "./ProfileTab";

const Tab = createMaterialBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={true}
      sceneAnimationEnabled={false}
      keyboardHidesNavigationBar={true}
      shifting={true}
      inactiveColor={"rgba(255, 255, 255, 0.5)"}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Forside",
          tabBarIcon: "home",
          tabBarColor: "#111",
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Surveys"
        options={{
          tabBarLabel: "Spørgeskemaer",
          tabBarIcon: "clipboard-text",
          tabBarBadge: "4",
          tabBarColor: "#1371cf",
        }}
        component={SurveyStack}
      />
      <Tab.Screen
        name="Cupons"
        options={{
          tabBarLabel: "Kuponer",
          tabBarIcon: "ticket-percent" /*"sack-percent" "sale"*/,
          tabBarBadge: "2",
          tabBarColor: "#ff8200",
        }}
        component={CuponsTab}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: "face-profile",
          tabBarColor: "#e02828",
        }}
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
}
