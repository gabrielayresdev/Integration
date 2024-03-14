import React from "react";
import { Text, View } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../../components/Button/Button";
import userService, { UpdateData } from "../../services/userService.ts";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import usePagination from "../../hooks/usePagination.tsx";
import { Span, Switch, SwitchItem } from "./styles.tsx";
import PageSlider from "../../components/PageSlider/PageSlider.tsx";
import PersonalData from "../ProfileForms/PersonalData.tsx";
import AddressData from "../ProfileForms/AddressData.tsx";
import { ButtonContainer } from "../../components/PageSlider/styles.tsx";
import AuthData from "../ProfileForms/AuthData.tsx";

export interface userForm {
  name: string;
  lastName: string;
  email: string;
  password: string;
  newPassword: string;
  newPassword2: string;
  cpf: string;
  phone: string;
  birthDate: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  houseNumber: string;
  imgUrl: null;
  addressSuplement: string;
}

const Profile = () => {
  /* const { user } = useUserContext(); */
  /* const navigation = useNavigation(); */
  const user = {
    name: "Gabriel",
    lastName: "Ayres Fortunato",
    email: "gabriel.ar.fort@gmail.com",
    password: "",
    newPassword: "",
    newPassword2: "",
    cpf: "13404795750",
    phone: "21967213085",
    birthDate: "2003-04-22",
    cep: "25515180",
    state: "RJ",
    city: "São João de Meriti",
    neighborhood: "Centro",
    street: "Rua Piauí",
    houseNumber: "405",
    imgUrl: null,
    addressSuplement: "",
  };

  const form = useForm({
    defaultValues: user,
  });

  const { page, goTo } = usePagination(2);

  const onSubmit = (data: userForm) => {
    try {
      const response = userService.updateData(data).then((response) => {
        return response;
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
            Autenticação
          </SwitchItem>
          <SwitchItem active={page === 1} onPress={() => goTo(1)}>
            Dados pessoais
          </SwitchItem>
        </Switch>
        <PageSlider page={page}>
          <AuthData form={form} />
          {page === 1 && <PersonalData form={form} />}
          {page === 2 && <AddressData form={form} />}
        </PageSlider>

        <ButtonContainer>
          <Button text="Salvar" onClick={form.handleSubmit(onSubmit)} />
        </ButtonContainer>
        {/* <Text>
          {user.name} - {user.email}
        </Text>
        <Button text="Sair" onClick={handleLogout} /> */}
      </View>
    );
  else return null;
};

export default Profile;
