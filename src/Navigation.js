import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/loginScreens/LoginScreen";
import SignupScreen from "./screens/loginScreens/SignupScreen";
import SplashScreen2 from "./screens/splashScreens/SplashScreen2";
import ForgotPasswordScreen from "./screens/loginScreens/ForgotPasswordScreen";
import ResetPasswordScreen1 from "./screens/loginScreens/ResetPasswordScreen1";
import ResetPasswordScreen2 from "./screens/loginScreens/ResetPasswordScreen2";

import MyTabs from "./components/MyTabs";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen2"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="ResetPasswordScreen1"
          component={ResetPasswordScreen1}
        />
        <Stack.Screen
          name="ResetPasswordScreen2"
          component={ResetPasswordScreen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
