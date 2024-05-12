import axios from "axios";
import { ToastAndroid } from "react-native";
import { URL_API } from "../utils/constants";
import { options } from "./options";

export const login = async (datos) => {
  try {
    const { data } = await axios.post(
      `${URL_API}/api/mobile/auth/login`,
      datos,
      options
    );
    return { auth: data?.auth, message: data?.message, token: data?.token };
  } catch (error) {
    console.log(error);
    ToastAndroid.show("Error del servidor", 5);
  }
};
