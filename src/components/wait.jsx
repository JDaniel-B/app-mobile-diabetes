import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import relax from "../../assets/relax.png";

export default function Wait() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nada Planificado Aun</Text>
      <Image style={styles.logo} source={relax} />
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
  text: { fontSize: 24, fontWeight: "300" },
  logo: { height: 250, width: 250 },
});
