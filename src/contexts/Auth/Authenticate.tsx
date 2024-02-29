import React from "react";
import { useUserContext } from "../UserContext";
import Profile from "../../pages/Profile/Profile";
import { useNavigation } from "@react-navigation/native";

import { NativeStackParamList } from "../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import userService from "../../services/userService.ts";
type Auth = NativeStackNavigationProp<NativeStackParamList>;

const Authenticate = () => {
  const navigation = useNavigation<Auth>();
  const { setUser } = useUserContext();
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    async function getUser() {
      const response = await userService
        .getDetails()
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((e) => {
          console.log(e);
          setAuthenticated(false);
          navigation.navigate("login");
        });
      // Se a resposta for positiva, o usuário vai para a página home
      if (response?.status === 200) {
        setUser(response.data);
        setAuthenticated(true);
      }
    }
    getUser();
  }, []);
  if (authenticated) return <Profile />;
  else return null;
};

export default Authenticate;
