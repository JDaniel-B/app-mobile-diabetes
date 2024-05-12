import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TextMedicament({ tittle, content }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{tittle}</Text>
      <Text style={styles.container}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 4,
  },
  tittle: { fontWeight: "800" },
  content: { flexWrap: "wrap", display: "flex" },
});
