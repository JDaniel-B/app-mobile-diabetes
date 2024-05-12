import axios from "axios";
import { ToastAndroid } from "react-native";
import { API_KEY, URL_API } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMe = async () => {
  const Token = await AsyncStorage.getItem("Token");
  try {
    const { data } = await axios.get(`${URL_API}/api/mobile/patient/getMe`, {
      headers: {
        apiKey: API_KEY,
        token: Token,
      },
    });
    return { error: data?.error, message: data?.message, userData: data };
  } catch (error) {
    console.log(error);
    ToastAndroid.show("Error del servidor", 5);
  }
};