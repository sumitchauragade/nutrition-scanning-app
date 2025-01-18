
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import StreakPage from "../screens/StreakPage";
import CameraScreen from "../screens/ScannerScreen";
import ScanningProgress from "../screens/ScannigProgress";
import NutritionResultsPage from "../screens/NutritionResultsPage";
import FoodScanningPage from "../screens/FoodScannigPage";

// Stack Navigator for Pre-Tab Flow
const Stack = createStackNavigator();
const PreTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoodScanning" component={FoodScanningPage} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="ScanningProgress" component={ScanningProgress} />
      <Stack.Screen name="NutritionResults" component={NutritionResultsPage} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("../assets/icons/home2x.png")
              : require("../assets/icons/home2x.png");
          } else if (route.name === "Logs") {
            icon = focused
              ? require("../assets/icons/logs-icon2x.png")
              : require("../assets/icons/logs-icon2x.png");
          } else if (route.name === "Scan") {
            icon = require("../assets/icons/scan2x.png");
          } else if (route.name === "Streaks") {
            icon = focused
              ? require("../assets/icons/streaks-icon2x.png")
              : require("../assets/icons/streaks-icon2x.png");
          } else if (route.name === "Profile") {
            icon = focused
              ? require("../assets/icons/profile-icon2x.png")
              : require("../assets/icons/profile-icon2x.png");
          }

          const iconStyle =
            route.name === "Scan"
              ? [styles.scanIcon]
              : [styles.icon, { tintColor: color }];

          return <Image source={icon} style={iconStyle} />;
        },
        tabBarLabel: ({ focused }) => {
          let label;

          if (route.name === "Home") {
            label = "Home";
          } else if (route.name === "Logs") {
            label = "Logs";
          } else if (route.name === "Scan") {
            label = ""; // No label for the Scan button
          } else if (route.name === "Streaks") {
            label = "Streaks";
          } else if (route.name === "Profile") {
            label = "Profile";
          }

          return (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? "#FFA726" : "#565656" },
              ]}
            >
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: "#FFA726",
        tabBarInactiveTintColor: "#565656",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Logs" component={HomeScreen} />
      <Tab.Screen name="NutritionResults" component={NutritionResultsPage} />
      <Tab.Screen name="Streaks" component={StreakPage} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

// App Navigator (Main Entry Point)
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <PreTabStack />
    </NavigationContainer>
  );
};

// Styles for the Bottom Tab Navigator
const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 68,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 74,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  scanIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#EDEDED",
    backgroundColor: "#FFF",
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
    textAlign: "center",
  },
});

export default AppNavigator;
