import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login/Login";
import Register from "./src/pages/Register/Register";
import RegisterContextProvider from "./src/contexts/RegisterContext";
import "react-native-gesture-handler";
import Routes from "./src/routes";
import UserContextProvider from "./src/contexts/UserContext";
import Profile from "./src/pages/Profile/Profile";
import YourForm from "./src/components/RegisterPages/YourForm";

export default function App() {
  return (
    <UserContextProvider>
      <Routes />
      {/* <YourForm /> */}
      {/* <Profile /> */}
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
