import React from "react";
import HomeScreen from "../screens/home";
import ChatScreen from "../screens/chat";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "../components/navbar";

const stack = createNativeStackNavigator();

function CitesNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        options={({ navigation }) => ({
          header: () => <Navbar navigation={navigation} />,
        })}
        name="Cites"
        component={HomeScreen}
      />
      <stack.Screen
        options={({ navigation }) => ({
          header: () => <Navbar navigation={navigation} />,
        })}
        name="Chat"
        component={ChatScreen}
      />
    </stack.Navigator>
  );
}

export default CitesNavigation;
