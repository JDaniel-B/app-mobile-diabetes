import React from "react";
import { View, StyleSheet } from "react-native";
import LoginForm from "../components/forms/login";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
