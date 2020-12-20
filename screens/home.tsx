import * as React from "react";
import { StyleSheet, Text, Button, ImageBackground } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  navigation: StackNavigationProp<ParamListBase, keyof ParamListBase>;
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

export default function Home({ navigation, route }: IProps) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/worldoFront.png")}
        style={styles.backgroundImage}
      ></ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
