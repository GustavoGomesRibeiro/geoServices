import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";

// routes
import Home from "../view/Home";
import Add from "../view/Add";
import Profile from "../view/Profile";
import Company from "../view/Company";
import Details from "../view/Details";
import NewServices from "../view/NewServices";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Menu = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 80,
        backgroundColor: "#000",
        borderTopColor: "#000",
      },
      tabStyle: {
        alignItems: "center",
        justifyContent: "center",
      },
      iconStyle: {
        flex: 0,
        height: 24,
        marginBottom: 5,
        marginTop: 5,
      },
      labelStyle: {
        fontFamily: "Archivo_700Bold",
        fontSize: 13,
        alignItems: "center",
      },
      inactiveTintColor: "#92929c",
      activeTintColor: "#fff",
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Tela Inicial",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome5 name="home" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Adicionar"
      component={Add}
      options={{
        tabBarLabel: "Adicionar",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome5 name="plus" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Perfil",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome5 name="user-alt" size={size} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default function EstablishmentRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Company"
        component={Company}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewServices"
        component={NewServices}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
