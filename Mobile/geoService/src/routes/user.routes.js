import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";

// routes
import Home from "../view/Home";
import Search from "../view/Search";
import Favorites from "../view/Favorites";
import Details from "../view/Details";
import Result from "../view/Result";

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
        width: 20,
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
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Buscar",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome5 name="search" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="heart" size={size} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default function UserRouter() {
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
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
