// src/App.js
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import RegisterScreen from "./screens/auth/register/RegisterScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Noto-Sans": require("./assets/fonts/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ThemeProvider theme={theme} style={{ fontFamily: 'Noto-Sans' }}>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          {/* Add more screens here as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
