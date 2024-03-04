import React from "react";
import { Text, View } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../../components/Button/Button";
import userService from "../../services/userService.ts";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import usePagination from "../../hooks/usePagination.tsx";
import { Span, Switch, SwitchItem } from "./styles.tsx";
import PageSlider from "../../components/PageSlider/PageSlider.tsx";

const Profile = () => {
  /* const { user } = useUserContext(); */
  /* const navigation = useNavigation(); */
  const user = {
    name: "Gabriel",
    lastName: "Ayres Fortunato",
    email: "gabriel.ar.fort@gmail.com",
    cpf: "13404795750",
    phone: "21967213085",
    password: "teste123",
    birthDate: "2003-04-22",
    cep: "25515180",
    state: "RJ",
    city: "São João de Meriti",
    neighborhood: "Centro",
    street: "Rua Piauí",
    houseNumber: "405",
    imgUrl: null,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const { page, goTo } = usePagination(2);

  /* const handleLogout = () => {
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
  }; */

  if (user)
    return (
      <View>
        <Switch>
          <SwitchItem active={page === 0} onPress={() => goTo(0)}>
            Dados pessoais
          </SwitchItem>
          <SwitchItem active={page === 1} onPress={() => goTo(1)}>
            Endereço
          </SwitchItem>
        </Switch>
        <PageSlider page={page}>
          <Span color="#ff0000"></Span>
          <Span color="#3cff00"></Span>
        </PageSlider>
        {/* <Text>
          {user.name} - {user.email}
        </Text>
        <Button text="Sair" onClick={handleLogout} /> */}
      </View>
    );
  else return null;
};

export default Profile;
