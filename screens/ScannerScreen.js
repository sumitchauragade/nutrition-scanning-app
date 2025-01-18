import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import PermissionModal from "../components/PermissionModal"; // Import the custom modal

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  // Check camera permissions on mount
  useEffect(() => {
    (async () => {
      const { status } = await Camera.getCameraPermissionsAsync();
      if (status === "granted") {
        // If permission is granted, navigate to FoodScanningPage
        navigation.replace("FoodScanning");
      } else {
        // Show modal to request permission
        setShowModal(true);
      }
    })();
  }, [navigation]);

  // Handle the "Allow Access" button in the custom modal
  const handleAllowAccess = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setShowModal(false);
      navigation.replace("FoodScanning"); // Navigate to FoodScanningPage
    } else {
      setHasPermission(false); // Update state if permission is denied
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background-Image1x.png")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Permission Modal */}
      <PermissionModal
        visible={showModal}
        onRequestPermission={handleAllowAccess}
        onCloseModal={() => setShowModal(false)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScannerScreen;
