import React from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens (keeping your existing imports)
import FoodScanningPage from "../screens/FoodScannigPage";
import CameraScreen from "../screens/ScannerScreen";
import ScanningProgress from "../screens/ScannigProgress";
import NutritionResultsPage from "../screens/NutritionResultsPage";
import StreakPage from "../screens/StreakPage";
import HomeScreen from "../screens/HomeScreen";

const windowWidth = Dimensions.get('window').width;

// PreTabStackNavigator
const PreTabStack = createStackNavigator();
function PreTabStackNavigator() {
  return (
    <PreTabStack.Navigator screenOptions={{ headerShown: false }}>
      <PreTabStack.Screen name="FoodScanning" component={FoodScanningPage} />
      <PreTabStack.Screen name="CameraScreen" component={CameraScreen} />
      <PreTabStack.Screen name="ScanningProgress" component={ScanningProgress} />
      <PreTabStack.Screen name="NutritionResults" component={NutritionResultsPage} />
    </PreTabStack.Navigator>
  );
}

// BottomTabNavigator
const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
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

          if (route.name === "Scan") {
            return (
              <View style={styles.scanIconContainer}>
                <Image source={icon} style={styles.scanIcon} />
              </View>
            );
          }

          return <Image source={icon} style={[styles.icon, { tintColor: color }]} />;
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
      <Tab.Screen name="Home" component={HomeScreen} listeners={{ tabPress: e => e.preventDefault() }} />
      <Tab.Screen name="Logs" component={HomeScreen} listeners={{ tabPress: e => e.preventDefault() }} />
      <Tab.Screen name="Scan" component={HomeScreen} listeners={{ tabPress: e => e.preventDefault() }} />
      <Tab.Screen name="Streaks" component={StreakPage} />
      <Tab.Screen name="Profile" component={HomeScreen} listeners={{ tabPress: e => e.preventDefault() }} />
    </Tab.Navigator>
  );
}

// Root Stack Navigator
const RootStack = createStackNavigator();
function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="PreTabStackNavigator" component={PreTabStackNavigator} />
      <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
}

// Main App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    tabBar: {
        height: 68,
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#EDEDED",
      },
      icon: {
        width: 24,
        height: 24,
      },
      scanIconContainer: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
      },
      scanIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#EDEDED",
        backgroundColor: "#FFF",
        marginTop: -12,
      },
      tabBarLabel: {
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4,
        textAlign: "center",
      }
});

export default AppNavigator;