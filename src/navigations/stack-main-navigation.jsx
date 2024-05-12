import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/login";
import HomeNavigation from "./stack-home-navigation";
import ResetPasswordScreen from "../screens/reset-password";

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="reset-password"
        component={ResetPasswordScreen}
        options={{
          title: "Restablecer Contraseña",
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
