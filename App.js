import { View } from "react-native";
import MainNavigation from "./src/navigations/stack-main-navigation.jsx";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { registerForPushNotificationsAsync } from "./src/hooks/registerNotification.js";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
          <Toasts overrideDarkMode={true} />
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
