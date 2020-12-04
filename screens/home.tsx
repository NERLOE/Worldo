import * as React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  navigation: StackNavigationProp<ParamListBase, keyof ParamListBase>;
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

export default function Home({ navigation, route }: IProps) {
  const pressHandler = () => {
    navigation.navigate("Surveys");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Dette er forsiden</Text>
      <Button onPress={pressHandler} title="Gå til spørgeskemaer" />
    </SafeAreaView>
  );
}