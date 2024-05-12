import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CardCites({ data }) {
  return (
    <View style={styles.card}>
      <View style={styles.item}>
        <Text>Doctor: {data?.nombre}</Text>
        <Text>Telefono: {data?.telefono}</Text>
      </View>
      <View style={styles.item}>
        <Text>Horario: {data?.horario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 6,
  },

  item: {
    gap: 4,
  },

  button: {
    fontSize: 14,
    backgroundColor: "#006FEE",
    padding: 5,
    color: "#FFF",
    borderRadius: 5,
  },
});
