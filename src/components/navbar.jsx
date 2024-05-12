import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { stylesNavBar } from "../styles/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendarDays,
  faCommentMedical,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const styles = stylesNavBar;

export default function Navbar({ navigation }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.navbar}>
      <View style={styles.containerUser}>
        <FontAwesomeIcon style={styles.logo} color="#0594fc" icon={faUser} />
        <Text>Gilberto Sutuc</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate("Cites")}>
          <FontAwesomeIcon
            style={styles.logo}
            color="#0594fc"
            icon={faCalendarDays}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <FontAwesomeIcon
            style={styles.logo}
            color="#0594fc"
            icon={faCommentMedical}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
