import * as React from "react";
import { StyleSheet, Text, Button, Image, View } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  navigation: StackNavigationProp<ParamListBase, keyof ParamListBase>;
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

export default function Profile({ navigation, route }: IProps) {
  const pressHandler = () => {
    navigation.navigate("Surveys");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={style.profileContainer}>
        <Text style={style.profileName}>Marcus Nerløe</Text>
        <Image
          style={style.profilePic}
          source={{
            uri:
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/22/2298679b7f211616f77f1ff31bd28b0a4685f338_full.jpg",
          }}
        />
        <Text style={globalStyles.titleText}>Point: 500</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  profileName: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#fff",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
