import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login/Login";
import Register from "./src/pages/Register/Register";

export default function App() {
  return (
    <View>
      <Login />
    </View>
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
