import { View, Text, StyleSheet } from "react-native";
import React from "react";
import moment from "moment";

export default function HeaderCites({ children, date }) {
  const formattedDate = moment(date, "YYYY-MM-DD");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tittle}>
          {formattedDate.format("dddd Do MMMM YYYY")}
        </Text>
        <View style={styles.line} />
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 20,
    gap: 10,
  },

  header: {
    width: "100%",
    height: "auto",
  },

  tittle: {
    fontSize: 15,
    letterSpacing: 2,
  },

  line: { width: "100%", borderTopWidth: 1, borderColor: "#000" },

  children: {
    width: "100%",
    gap: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
