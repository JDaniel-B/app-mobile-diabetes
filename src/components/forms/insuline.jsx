import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import DatePicker from "../TextInput/datepicker";

export default function InsulineForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nivel de Insulina" />
      <DatePicker />
      <TextInput style={styles.input} placeholder="Observaciones" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "80%",
    gap: 15,
    backgroundColor: "#FFF",
  },

  input: { borderBottomWidth: 1, width: "100%" },
});
