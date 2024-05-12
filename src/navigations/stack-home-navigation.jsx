import React from "react";
import AuthProvider from "../providers/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendarDays,
  faCapsules,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar";
import MedicamentScreen from "../screens/medicament";
import InsulineNavigation from "./stack-insuline.navigation";
import CitesNavigation from "./stack-cites-navigation";

const Bottom = createBottomTabNavigator();

function HomeNavigation({ navigation }) {
  return (
    <AuthProvider navigation={navigation}>
      <Bottom.Navigator
        screenOptions={{
          tabBarLabelStyle: { paddingBottom: 3 },
        }}
      >
        <Bottom.Screen
          name="cites"
          component={CitesNavigation}
          options={{
            headerShown: false,
            tabBarLabel: "Citas",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon
                icon={faCalendarDays}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Bottom.Screen
          name="medicine"
          component={MedicamentScreen}
          options={{
            header: ({ options, route }) => <Navbar />,
            tabBarLabel: "Medicamento",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faCapsules} color={color} size={size} />
            ),
          }}
        />
        <Bottom.Screen
          name="insulin"
          component={InsulineNavigation}
          options={{
            headerShown: false,
            tabBarLabel: "Insulina",
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faSyringe} color={color} size={size} />
            ),
          }}
        />
      </Bottom.Navigator>
    </AuthProvider>
  );
}

export default HomeNavigation;
