import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterContextProvider from "../contexts/RegisterContext";
import Authenticate from "../contexts/Auth/Authenticate";
import UserContextProvider from "../contexts/UserContext";
import Profile from "../pages/Profile/Profile";

export type NativeStackParamList = {
  login: undefined;
  register: undefined;
  profile: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={LoginAuthenticated} />
      <Stack.Screen name="register" component={RegisterWithContext} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

function RegisterWithContext() {
  return (
    <RegisterContextProvider>
      <Register />
    </RegisterContextProvider>
  );
}

function LoginAuthenticated() {
  return (
    <Authenticate>
      <Login />
    </Authenticate>
  );
}
