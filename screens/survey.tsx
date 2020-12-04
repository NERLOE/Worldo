import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { ISurvey } from "./surveys";
import Card from "../shared/card";

interface IProps {
  navigation: StackNavigationProp<ParamListBase, keyof ParamListBase>;
  route: RouteProp<ParamListBase, keyof ParamListBase>;
}

interface RouteParams {
  params: ISurvey;
}

export default function Survey({ navigation, route }: IProps) {
  var r: RouteParams = route as any;
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        <Text style={styles.surveyTitle}>{r.params.title}</Text>
        <Text style={styles.surveyAuthorContainer}>
          Publiceret af{" "}
          <Text style={styles.surveyAuthor}>{r.params.author}</Text>
        </Text>
        <Text style={styles.surveyDesc}>{r.params.description}</Text>

        <View style={styles.questionsContainer}>
          {r.params.questions.map((question, index) => {
            return (
              <Card key={index}>
                <Text style={styles.questionTitle}>{question.question}</Text>
                <View style={styles.questionOptions}>
                  {question.options.map((opt) => {
                    return (
                      <View style={styles.questionOption}>
                        <Text style={styles.questionOptionText}>{opt}</Text>
                      </View>
                    );
                  })}
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  questionOptions: {
    margin: 5,
  },
  questionOptionText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 14,
  },
  questionOption: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  questionsContainer: {
    marginVertical: 25,
  },
  surveyTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  surveyDesc: {
    fontSize: 12,
    fontWeight: "200",
    color: "#fff",
  },
  surveyAuthorContainer: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "400",
    color: "#fff",
  },
  surveyAuthor: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "900",
    color: "#bd7",
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
