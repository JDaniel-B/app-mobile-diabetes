import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { login } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "@backpackapp-io/react-native-toast";

function LoginForm({ navigation }) {
  const [isHidden, setIsHidden] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const { auth, message, token } = await login(user);
    if (auth) {
      const value = await AsyncStorage.setItem("Token", token);
      toast.success(message);
      return navigation.navigate("Home");
    }
    return toast.error(message);
  };

  return (
    <View
      style={{
        width: "80%",
        padding: 20,
        gap: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/5935/5935561.png",
        }}
        style={{ width: 150, height: 150 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "900",
          letterSpacing: 3,
          color: "#0594fc",
        }}
      >
        BIENVENIDO
      </Text>
      <TextInput
        onChangeText={(text) => (user.email = text)}
        style={{ borderBottomWidth: 1, width: "100%" }}
        placeholder="Correo Electronico"
      />
      <View
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <TextInput
          onChangeText={(text) => (user.password = text)}
          style={{ borderBottomWidth: 1, paddingRight: 25 }}
          secureTextEntry={isHidden}
          placeholder="Contraseña"
        />
        <TouchableOpacity
          onPress={() => setIsHidden(!isHidden)}
          style={{ position: "absolute", right: 5 }}
        >
          <FontAwesomeIcon icon={isHidden ? faEyeSlash : faEye} />
        </TouchableOpacity>
      </View>
      <Button onPress={() => handleSubmit()} title="Iniciar Sesion" />
      <TouchableOpacity onPress={() => navigation.navigate("reset-password")}>
        <Text style={{ color: "#0594fc" }}>¿Has olvidado la contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm;
