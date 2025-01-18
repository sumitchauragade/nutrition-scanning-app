import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import PermissionModal from "../components/PermissionModal";
import { Camera } from "expo-camera";

const { width, height } = Dimensions.get("window");

const FoodScanningPage = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  const handleCapturePress = async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    if (status !== "granted") {
      setModalVisible(true);
    } else {
      setHasPermission(true);
      navigation.navigate("CameraScreen");
    }
  };

  const handleRequestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
      setModalVisible(false);
      navigation.navigate("CameraScreen");
    } else {
      setHasPermission(false);
      setModalVisible(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background-Image1x.png")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          {/* Add back navigation or other icons if needed */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/icons/flash1x.png")} />
        </TouchableOpacity>
      </View>

      {/* Instructions Box with Blur */}
      <BlurView intensity={48} style={styles.instructionsBox}>
        <View style={styles.contentWrapper}>
          {/* Scan Icon */}
          <Image
            source={require("../assets/icons/scan-icon2x.png")}
            style={styles.scanIcon}
          />

          {/* Text */}
          <View style={styles.textWrapper}>
            <Text style={styles.boldText}>Scan Your Food</Text>
            <Text style={styles.descriptionText}>
              Ensure your food is well-lit and in focus for the most accurate
              scan.
            </Text>
          </View>
        </View>
      </BlurView>

      {/* Scanning Overlay */}
      <View style={styles.scanOverlay}>
        <View style={styles.scanLine} />
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomSection}>
        {/* Gallery Icon */}
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/icons/gallery-icon2x.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Capture Button */}
        <TouchableOpacity
          style={styles.captureButton}
          onPress={handleCapturePress}
        >
          <Image
            source={require("../assets/icons/button-icon1x.png")}
            style={styles.captureIcon}
          />
        </TouchableOpacity>

        {/* 1x Icon */}
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/icons/gallery-zoom2x.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Permission Modal */}
      <PermissionModal
        visible={isModalVisible}
        onRequestPermission={handleRequestPermission}
        onCloseModal={() => setModalVisible(false)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBar: {
    width: width * 0.9,
    height: height * 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  instructionsBox: {
    position: "absolute",
    top: height * 0.15,
    width: width * 0.8,
    height: height * 0.08,
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    overflow: "hidden",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  scanIcon: {
    width: width * 0.08,
    height: height * 0.04,
    paddingHorizontal: 2.67,
    paddingVertical: 4,
    opacity: 1,
  },
  textWrapper: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    gap: 4,
  },
  boldText: {
    fontSize: width * 0.035,
    fontWeight: "bold",
    color: "#fff",
  },
  descriptionText: {
    fontSize: width * 0.03,
    color: "#fff",
    lineHeight: width * 0.04,
  },
  scanOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanLine: {
    width: "80%",
    height: 2,
    backgroundColor: "limegreen",
  },
  bottomSection: {
    position: "absolute",
    bottom: height * 0.02,
    width: width * 0.9,
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
  },
  iconWrapper: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  captureButton: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default FoodScanningPage;
