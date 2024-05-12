import React from "react";
import InsulineScreen from "../screens/insuline";
import ReportInsulineScreen from "../screens/report-insuline";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const stack = createMaterialTopTabNavigator();

function InsulineNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Registrar" component={InsulineScreen} />
      <stack.Screen name="Ver Historial" component={ReportInsulineScreen} />
    </stack.Navigator>
  );
}

export default InsulineNavigation;
