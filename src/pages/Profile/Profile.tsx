import React from "react";
import { View } from "react-native";
import { useUserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user } = useUserContext();
  if (user)
    return (
      <View>
        {user.name} - {user.email}
      </View>
    );
  else return null;
};

export default Profile;
