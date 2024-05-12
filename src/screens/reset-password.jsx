import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import reset from "../../assets/reset.png";
import Button from "../components/button";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.image} source={reset} />
        <Text style={styles.text}>Ingrese su correo electronico</Text>
        <TextInput
          onChangeText={(text) => (user.email = text)}
          style={{ borderBottomWidth: 1, width: "100%" }}
          placeholder="ejemplo@gmail.com"
        />
        <Button tittle={"Restablecer"} action={() => alert("hola")} />
      </View>
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

  form: {
    width: "80%",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  text: { fontSize: 18 },

  image: { height: 150, width: 150 },
});
