import axios from "axios";
import { ToastAndroid } from "react-native";
import { API_KEY, URL_API } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const header = async (id) => {
  const Token = await AsyncStorage.getItem("Token");
  try {
    const { data } = await axios.get(
      `${URL_API}/api/mobile/appointment/header/${id}`,
      {
        headers: {
          apiKey: API_KEY,
          token: Token,
        },
      }
    );
    return data;
  } catch (error) {
    ToastAndroid.show("Error del servidor", 5);
  }
};

export const detail = async (id) => {
  const Token = await AsyncStorage.getItem("Token");
  try {
    const { data } = await axios.get(
      `${URL_API}/api/mobile/appointment/detail/${id}`,
      {
        headers: {
          apiKey: API_KEY,
          token: Token,
        },
      }
    );
    return data;
  } catch (error) {
    ToastAndroid.show("Error del servidor", 5);
  }
};