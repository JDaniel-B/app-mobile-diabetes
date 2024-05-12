import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Loading({ component }) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3500);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"#006FEE"} />
        <Text style={styles.text}>Cargando...</Text>
      </View>
    );
  } else {
    return <View>{component}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 16 },
});
