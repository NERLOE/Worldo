import * as React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  navigation: StackNavigationProp<ParamListBase, keyof ParamListBase>;
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

export interface ICupon {
  title: string;
  company: string;
  description: string;
  price: number;
  cuponCode: string;
  key: string;
}

function generateCupon() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
}

export default function Cupons({ navigation, route }: IProps) {
  const [cupons, setCupons] = React.useState<Array<ICupon>>([
    {
      title: "KØB 1, FÅ 1 GRATIS",
      description:
        "Indløs denne kupon, og få en gratis vare med når du køber min. 1 vare i én af vores butikker.",
      company: "Salling Group",
      price: 2000,
      cuponCode: generateCupon(),
      key: "1",
    },
    {
      title: "FÅ 1 ÅRS GRATIS STRØMFORBRUG",
      description:
        "Indløs denne kupon, og få dig et helt års gratis forbrug af strøm, fra vores værker hos Øsrsted.",
      company: "Ørsted",
      price: 20000,
      cuponCode: generateCupon(),
      key: "2",
    },
  ]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Text style={globalStyles.titleText}>Find og indløs kuponer her</Text>
        <FlatList
          data={cupons}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => console.log("Pressed cupon")}
              >
                <Card>
                  <Text style={styles.cuponTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.cuponCompany} numberOfLines={1}>
                    {item.company}
                  </Text>
                  <Text style={styles.cuponDesc}>{item.description}</Text>
                  <Text style={styles.cuponPrice}>
                    Pris: {item.price} point
                  </Text>
                </Card>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cuponTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
  cuponCompany: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cuponDesc: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "200",
  },
  cuponPrice: {
    marginTop: 20,
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
