import { Text, StyleSheet, TouchableNativeFeedback, View } from "react-native";
import React from "react";

export default function Button({ tittle, action }) {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={action}>
        <Text style={styles.text}>{tittle}</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    width: "auto",
    backgroundColor: "#007FFF",
    borderRadius: 5,
  },
  text: { fontSize: 14, letterSpacing: 1, color: "#FFF" },
});
