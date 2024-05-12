import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Table() {
  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Text style={styles.itemHeader}>ID</Text>
        <Text style={styles.itemHeader}>Nivel</Text>
        <Text style={styles.itemHeader}>Fecha de Registro</Text>
      </View>
      <View style={styles.body}>
        <Text styles={styles.itemBody}>1</Text>
        <Text styles={styles.itemBody}>250</Text>
        <Text styles={styles.itemBody}>15 marzo de 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", maxHeight: 300, width: "90%" },

  header: {
    display: "flex",
    gap: 10,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: "blue",
  },

  itemHeader: { padding: 10, width: "auto" },

  body: {
    display: "flex",
    gap: 35,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },

  itemBody: { padding: 10, width: "auto", fontSize: 20},
});
