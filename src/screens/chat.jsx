import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { URL_API } from "../utils/constants";

const socket = io(URL_API);

export default function ChatScreen() {
  const idUser = socket.id;
  const [data, setData] = useState([]);
  const [isConected, setIsConected] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("connect", () => setIsConected(true));

    socket.on("chat-message", (msg) => {
      console.log(msg);
      setData((data) => [...data, msg]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat-message");
    };
  }, []);

  const sendMessage = (text) => {
    socket.emit("chat-message", text);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        {data.map((item, index) => {
          return (
            <View style={styles.containerMessage} key={index}>
              <Text
                key={index}
                style={
                  item.user == idUser ? styles.messageMe : styles.messageOther
                }
              >
                {item.message}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.form}>
        <TextInput
          value={message}
          onChangeText={(e) => setMessage(e)}
          style={styles.input}
          placeholder="Escribe Un Mensaje"
        />
        <TouchableOpacity
          onPress={() => sendMessage(message)}
          style={styles.button}
        >
          <Text style={{ color: "#FFF" }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    padding: 15,
    gap: 10,
  },

  chat: {
    flex: 1, // Grow to fill remaining space
    backgroundColor: "#FEFEFE", // Optional background color
  },

  containerMessage: {
    marginBottom: 10, // Add spacing between messages
    padding: 10,
    borderRadius: 5, // Rounded corners
  },

  messageMe: {
    padding: 7,
    backgroundColor: "#006FEE",
    alignSelf: "flex-end", // Align to the right
    textAlign: "right", // Text aligns to the right
    color: "#FFF",
    maxWidth: "75%",
  },

  messageOther: {
    padding: 7,
    backgroundColor: "#3f3f46",
    alignSelf: "flex-start", // Align to the left
    textAlign: "left", // Text aligns to the left
    color: "#FFF",
    maxWidth: "75%",
  },

  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 7,
  },

  input: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#006FEE",
    padding: 5,
    borderRadius: 5,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
