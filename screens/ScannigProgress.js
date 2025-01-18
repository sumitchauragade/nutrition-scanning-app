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
          setTimeout(
            () => navigation.navigate("BottomTabNavigator", { screen: "Scan" }),
            200
          );
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
      <Image
        source={require("../assets/images/nutrak-logo2x.png")}
        style={styles.logo}
      />

      <Animated.Image
        source={require("../assets/icons/loader2x.png")}
        style={[styles.progressIcon, { transform: [{ rotate: spin }] }]}
      />

      <Text style={styles.message}>Scanning in progress...</Text>

      <View style={styles.linearProgressContainer}>
        <View style={styles.linearProgress}>
          <View
            style={[styles.linearProgressFill, { width: `${progress}%` }]}
          ></View>
        </View>

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
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  logo: {
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_HEIGHT * 0.05,
    position: "absolute",
    top: SCREEN_HEIGHT * 0.1,
    resizeMode: "contain",
  },
  progressIcon: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    resizeMode: "contain",
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  message: {
    fontSize: SCREEN_WIDTH * 0.04,
    color: "#666",
    marginTop: SCREEN_HEIGHT * 0.02,
    textAlign: "center",
  },
  linearProgressContainer: {
    alignItems: "center",
    marginTop: SCREEN_HEIGHT * 0.03,
  },
  linearProgress: {
    height: SCREEN_HEIGHT * 0.015,
    width: SCREEN_WIDTH * 0.8,
    backgroundColor: "#e0e0e0",
    borderRadius: SCREEN_HEIGHT * 0.0075,
    overflow: "hidden",
  },
  linearProgressFill: {
    height: "100%",
    backgroundColor: "#6AB04A",
  },
  progressPercentage: {
    marginTop: SCREEN_HEIGHT * 0.01,
    fontSize: SCREEN_WIDTH * 0.045,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default ScanningProgress;
