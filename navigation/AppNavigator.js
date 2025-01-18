// import React from "react";
// import { Image, View, StyleSheet } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import FoodScanningPage from "../screens/FoodScannigPage";
// import NutritionResultsPage from "../screens/NutritionResultsPage";
// import ScanningProgress from "../screens/ScannigProgress";
// import StreakPage from "../screens/StreakPage";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="FoodScanning" component={FoodScanningPage} />
//         <Stack.Screen
//           name="NutritionResults"
//           component={NutritionResultsPage}
//         />
//         <Stack.Screen name="ScanningProgress" component={ScanningProgress} />
//         <Stack.Screen name="StreakPage" component={StreakPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({});

// export default AppNavigator;

// import React from "react";
// import { Image } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // Import screens
// import HomeScreen from "../screens/HomeScreen";
// import StreakPage from "../screens/StreakPage";
// import ScannerScreen from "../screens/ScannerScreen";
// import ScanningProgress from "../screens/ScannigProgress";
// import NutritionResultsPage from "../screens/NutritionResultsPage";
// import FoodScanningPage from "../screens/FoodScannigPage";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Camera and Scanning Stack
// const ScanStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Scanner" component={ScannerScreen} />
//       <Stack.Screen name="ScanningProgress" component={ScanningProgress} />
//       <Stack.Screen name="NutritionResults" component={NutritionResultsPage} />
//       <Stack.Screen name="FoodScanning" component={FoodScanningPage} />
//     </Stack.Navigator>
//   );
// };

// // Bottom Tab Navigator
// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: "#fff",
//           borderTopWidth: 1,
//           borderTopColor: "#e0e0e0",
//           height: 60,
//         },
//         tabBarIcon: ({ focused, color, size }) => {
//           let icon;

//           if (route.name === "Home") {
//             icon = require("../assets/icons/home2x.png"); // Replace with actual icon
//           } else if (route.name === "Streaks") {
//             icon = require("../assets/icons/streaks-icon2x.png"); // Replace with actual icon
//           } else if (route.name === "Scan") {
//             icon = require("../assets/icons/scanner-icon2x.png"); // Replace with actual icon
//           }

//           return (
//             <Image
//               source={icon}
//               style={{
//                 width: size,
//                 height: size,
//                 tintColor: focused ? "#FFA726" : "#565656",
//               }}
//             />
//           );
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: "500",
//         },
//         tabBarActiveTintColor: "#FFA726",
//         tabBarInactiveTintColor: "#565656",
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
      
//       <Tab.Screen name="Scan" component={ScanStack} />
//       <Tab.Screen name="Streaks" component={StreakPage} />
//     </Tab.Navigator>
//   );
// };

// // App Navigator
// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import StreakPage from "../screens/StreakPage";
import ScannerScreen from "../screens/ScannerScreen";
import ScanningProgress from "../screens/ScannigProgress";
import NutritionResultsPage from "../screens/NutritionResultsPage";
import FoodScanningPage from "../screens/FoodScannigPage";

// Stack for Scan-Related Screens
const Stack = createStackNavigator();
const ScanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Scanner" component={ScannerScreen} />
      <Stack.Screen name="ScanningProgress" component={ScanningProgress} />
      <Stack.Screen name="NutritionResults" component={NutritionResultsPage} />
      <Stack.Screen name="FoodScanning" component={FoodScanningPage} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

// Custom TabBar Component
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar, // Apply custom tab bar styles
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("../assets/icons/home2x.png") // Active Home icon
              : require("../assets/icons/home2x.png"); // Default Home icon
          } else if (route.name === "Logs") {
            icon = focused
              ? require("../assets/icons/logs-icon2x.png") // Active Logs icon
              : require("../assets/icons/logs-icon2x.png"); // Default Logs icon
          } else if (route.name === "Scan") {
            icon = require("../assets/icons/scan2x.png"); // Same icon for both states
          } else if (route.name === "Streaks") {
            icon = focused
              ? require("../assets/icons/streaks-icon2x.png") // Active Streaks icon
              : require("../assets/icons/streaks-icon2x.png"); // Default Streaks icon
          } else if (route.name === "Profile") {
            icon = focused
              ? require("../assets/icons/profile-icon2x.png") // Active Profile icon
              : require("../assets/icons/profile-icon2x.png"); // Default Profile icon
          }

          // TabBarIcon Styling
          const iconStyle =
            route.name === "Scan"
              ? [styles.scanIcon, { tintColor: color }] // Custom Scan icon styles
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
      {/* Tab Screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Logs" component={StreakPage} />
      <Tab.Screen name="Scan" component={ScanStack} />
      <Tab.Screen name="Streaks" component={StreakPage} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

// App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
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
    alignItems: "center", // Center the icon and label vertically
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
    marginTop: 4, // Add space between the icon and the label
    textAlign: "center",
  },


});

export default AppNavigator;


