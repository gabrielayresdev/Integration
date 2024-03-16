import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import { NavigationContainer } from "@react-navigation/native";

export type RootDrawerParamList = {
  profile: undefined;
  home: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "#33415C",
          headerStyle: {
            backgroundColor: "#F1F4FF",
          },
          drawerStyle: {
            backgroundColor: "#F1F4FF",
          },
        }}
        initialRouteName="home"
      >
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
