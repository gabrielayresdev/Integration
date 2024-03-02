import React from "react";
import { Text, View } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../../components/Button/Button";
import userService from "../../services/userService.ts";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const { user } = useUserContext();
  const navigation = useNavigation();

  const handleLogout = () => {
    try {
      userService.logout().then((response) => {
        console.log(response);

        if (response?.status === 200) {
          navigation.navigate("login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (user)
    return (
      <View>
        <Text>
          {user.name} - {user.email}
        </Text>
        <Button text="Sair" onClick={handleLogout} />
      </View>
    );
  else return null;
};

export default Profile;
