import * as React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props: any) {
  return (
    <View style={[styles.card, props.style]}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#151515",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#111",
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 0,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
