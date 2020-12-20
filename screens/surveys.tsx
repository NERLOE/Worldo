import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../shared/card";
import SurveyData from "../data/SurveyData";

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
  answered?: boolean;
  key: string;
}

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Surveys({ navigation, route }: IProps) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [surveys, setSurveys] = React.useState<Array<ISurvey>>(SurveyData);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={surveys.sort((s) => (s.answered ? 1 : -1))}
        renderItem={({ item, index }) => {
          var amtOptions = 0;
          item.questions.forEach((q) => {
            amtOptions += q.options.length;
          });

          var calcTime =
            item.questions.length * 0.1 +
            (amtOptions / item.questions.length) * 0.05; // Math.floor(amtOptions / item.questions.length);

          var time = "";
          if (calcTime < 1) {
            time = 60 * calcTime + " sek.";
          } else {
            time = calcTime + " min.";
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Survey", item)}
            >
              <Card
                style={
                  item.answered
                    ? styles.answeredSurveyContainer
                    : styles.unAnsweredSurveyContainer
                }
              >
                <View style={styles.surveyContainer}>
                  <Text style={styles.surveyTitle}>{item.name}</Text>
                  <Text style={styles.surveyPrice}>{item.price} point</Text>
                  <Text style={styles.surveyAuthor}>{item.author}</Text>
                  <Text style={styles.surveyDesc} numberOfLines={2}>
                    {item.description}
                  </Text>
                  <Text style={styles.surveyTime}>Tager ca. {time}</Text>
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
  answeredSurveyContainer: {
    backgroundColor: "rgba(100, 255, 100, 0.4)",
  },
  unAnsweredSurveyContainer: {
    backgroundColor: "rgba(255, 50, 50, 1)",
  },
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
