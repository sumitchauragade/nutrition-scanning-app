import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ScanningProgress = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const rotation = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef(null);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startRotation();

    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => navigation.navigate("BottomTabNavigator", { screen: "Scan" }), 200);

        }
        return newProgress;
      });
    }, 200);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [navigation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/nutrak-logo2x.png")}
        style={styles.logo}
      />

      {/* Rotating Circular Progress Icon */}
      <Animated.Image
        source={require("../assets/icons/loader2x.png")}
        style={[styles.progressIcon, { transform: [{ rotate: spin }] }]}
      />

      {/* Scanning Text */}
      <Text style={styles.message}>Scanning in progress...</Text>

      {/* Dynamic Linear Progress Bar */}
      <View style={styles.linearProgressContainer}>
        <View style={styles.linearProgress}>
          <View
            style={[
              styles.linearProgressFill,
              { width: `${progress}%` },
            ]}
          ></View>
        </View>

        {/* Progress Percentage Text */}
        <Text style={styles.progressPercentage}>{progress}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: SCREEN_WIDTH * 0.05, // 5% horizontal padding for small devices
  },
  logo: {
    width: SCREEN_WIDTH * 0.25, // 25% of screen width
    height: SCREEN_HEIGHT * 0.05, // 5% of screen height
    position: "absolute",
    top: SCREEN_HEIGHT * 0.1, // 10% from the top
    resizeMode: "contain",
  },
  progressIcon: {
    width: SCREEN_WIDTH * 0.4, // 40% of screen width
    height: SCREEN_WIDTH * 0.4, // 40% of screen width (keeping it square)
    resizeMode: "contain",
    marginBottom: SCREEN_HEIGHT * 0.03, // 3% margin below spinner
  },
  message: {
    fontSize: SCREEN_WIDTH * 0.04, // Scaled font size (4% of screen width)
    color: "#666",
    marginTop: SCREEN_HEIGHT * 0.02, // 2% margin above progress bar
    textAlign: "center",
  },
  linearProgressContainer: {
    alignItems: "center",
    marginTop: SCREEN_HEIGHT * 0.03, // 3% vertical spacing
  },
  linearProgress: {
    height: SCREEN_HEIGHT * 0.015, // 1.5% of screen height
    width: SCREEN_WIDTH * 0.8, // 80% of screen width
    backgroundColor: "#e0e0e0",
    borderRadius: SCREEN_HEIGHT * 0.0075, // Rounded corners relative to height
    overflow: "hidden",
  },
  linearProgressFill: {
    height: "100%",
    backgroundColor: "#6AB04A",
  },
  progressPercentage: {
    marginTop: SCREEN_HEIGHT * 0.01, // 1% margin above the text
    fontSize: SCREEN_WIDTH * 0.045, // Scaled font size (4.5% of screen width)
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default ScanningProgress;

