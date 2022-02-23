import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  HomeStackScreen,
  ListBookStackScreen,
} from "../navigation/StackNavigators";
import SearchScreen from "../screens/SearchScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "HomeStackScreen") {
            iconName = "home-outline";
          } else if (route.name === "ListBookStackScreen") {
            iconName = "book-outline";
          } else if (route.name === "SearchScreen") {
            iconName = "search-outline";
          } else if (route.name === "UserProfileScreen") {
            iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="ListBookStackScreen"
        component={ListBookStackScreen}
        options={{ title: "List Book" }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
