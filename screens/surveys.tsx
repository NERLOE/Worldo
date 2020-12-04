import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../shared/card";
import LinearGradient from "react-native-linear-gradient";

interface IProps {
  navigation: StackNavigationProp<ParamListBase, keyof ParamListBase>;
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

export interface SurveyQuestion {
  question: string;
  options: Array<String>;
}

export interface ISurvey {
  name: string;
  title: string;
  description: string;
  price: number;
  questions: Array<SurveyQuestion>;
  author: string;
  key: string;
}

export default function Surveys({ navigation, route }: IProps) {
  const [surveys, setSurveys] = React.useState<Array<ISurvey>>([
    {
      name: "Sortering af affald",
      title: "Håndtering af sortering af affald",
      description:
        "Vi lever i året 2020 og klimaforandring er en stor del af vores hverdag. Skraldesortering har en stor indflydelse på udledelsen af CO2 i verden, så derfor vil vi gerne stille nogle hurtige spørgsmål omkring dig og din affaldssortering.",
      price: 500,
      questions: [
        {
          question: "Hvor tit sortere du dit affald?",
          options: ["Hver dag", "Aldrig"],
        },
        {
          question: "Hvilke sorteringsmuligheder har du?",
          options: ["Alt sorteres hvert for sig", "Intet bliver sorteret"],
        },
        {
          question: "Hvor tit sortere du dit affald?",
          options: ["Hver dag", "Aldrig"],
        },
        {
          question: "Hvilke sorteringsmuligheder har du?",
          options: ["Alt sorteres hvert for sig", "Intet bliver sorteret"],
        },
      ],
      author: "Ørsted",
      key: "1",
    },
    {
      name: "Plastikforbrug",
      title: "Plastikforbrug",
      description:
        "Vi lever i året 2020 og klimaforandring er en stor del af vores hverdag. Skraldesortering har en stor indflydelse på udledelsen af CO2 i verden, så derfor vil vi gerne stille nogle hurtige spørgsmål omkring dig og din affaldssortering.",
      price: 500,
      questions: [
        {
          question: "Hvor tit sortere du dit affald?",
          options: ["Hver dag", "Aldrig"],
        },
      ],
      author: "Salling Group",
      key: "2",
    },
    {
      name: "Rejser",
      title: "Spørgeskema omkring rejseforbrug",
      description:
        "Vi lever i året 2020 og klimaforandring er en stor del af vores hverdag. Skraldesortering har en stor indflydelse på udledelsen af CO2 i verden, så derfor vil vi gerne stille nogle hurtige spørgsmål omkring dig og din affaldssortering.",
      price: 500,
      questions: [
        {
          question: "Hvor tit sortere du dit affald?",
          options: ["Hver dag", "Aldrig"],
        },
      ],
      author: "SAS",
      key: "3",
    },
    {
      name: "Sortering af affald",
      title: "Sortering af affald",
      description:
        "Vi lever i året 2020 og klimaforandring er en stor del af vores hverdag. Skraldesortering har en stor indflydelse på udledelsen af CO2 i verden, så derfor vil vi gerne stille nogle hurtige spørgsmål omkring dig og din affaldssortering.",
      price: 500,
      questions: [
        {
          question: "Hvor tit sortere du dit affald?",
          options: ["Hver dag", "Aldrig"],
        },
      ],
      author: "Ørsted",
      key: "4",
    },
  ]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={surveys}
        renderItem={({ item, index }) => {
          var calcTime = item.questions.length;
          var amtOptions = 0;
          item.questions.forEach((q) => {
            amtOptions += q.options.length;
          });

          calcTime = Math.floor(amtOptions / item.questions.length);

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Survey", item)}
            >
              <Card>
                <View style={styles.surveyContainer}>
                  <Text style={styles.surveyTitle}>{item.name}</Text>
                  <Text style={styles.surveyPrice}>{item.price} point</Text>
                  <Text style={styles.surveyAuthor}>{item.author}</Text>
                  <Text style={styles.surveyDesc} numberOfLines={2}>
                    {item.description}
                  </Text>
                  <Text style={styles.surveyTime}>
                    Tager ca. {calcTime} min.
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  surveyContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  surveyTitle: {
    fontWeight: "900",
    color: "#fff",
    fontSize: 20,
    alignSelf: "flex-start",
  },
  surveyPrice: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "#fff",
    alignSelf: "center",
    fontSize: 15,
  },
  surveyAuthor: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 14,
  },
  surveyDesc: {
    fontWeight: "200",
    fontStyle: "italic",
    color: "#fff",
    fontSize: 12,
  },
  surveyTime: {
    fontWeight: "500",
    marginTop: 10,
    color: "#fff",
    fontSize: 12,
  },
});
