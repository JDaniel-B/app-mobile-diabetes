import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Table from "../components/table";

export default function ReportInsulineScreen() {
  return (
    <View style={styles.container}>
      <Table />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
