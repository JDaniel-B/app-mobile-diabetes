import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InsulineForm from "../components/forms/insuline";

export default function InsulineScreen() {
  return (
    <View style={styles.container}>
      <InsulineForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
