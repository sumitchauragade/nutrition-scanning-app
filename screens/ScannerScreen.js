import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const CameraScreen = ({ navigation }) => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to access the camera
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  const leftRightMarginPercent = 0.1;
  const topMarginPercent = 0.3;
  const bottomMarginPercent = 0.2;

  const leftRightMargin = screenWidth * leftRightMarginPercent;
  const topMargin = screenHeight * topMarginPercent;
  const bottomMargin = screenHeight * bottomMarginPercent;

  const maxBoxWidth = screenWidth - 2 * leftRightMargin;
  const maxBoxHeight = screenHeight - topMargin - bottomMargin;

  const scannerBoxSize = Math.min(maxBoxWidth, maxBoxHeight);

  const adjustedLeftRightMargin = (screenWidth - scannerBoxSize) / 2;
  const adjustedTopMargin = topMargin;
  const adjustedBottomMargin =
    screenHeight - adjustedTopMargin - scannerBoxSize;

  const cornerSize = scannerBoxSize * 0.2;
  const halfCornerSize = cornerSize / 2;

  const handleCapturePress = () => {
    navigation.navigate("ScanningProgress");
  };

  return (
    <View style={styles.container}>
      <CameraView style={StyleSheet.absoluteFill} facing={facing} />

      <View style={styles.overlay}>
        <View style={[styles.overlayTop, { height: adjustedTopMargin }]} />
        <View
          style={[styles.overlayBottom, { height: adjustedBottomMargin }]}
        />
        <View
          style={[
            styles.overlayLeft,
            {
              top: adjustedTopMargin,
              bottom: adjustedBottomMargin,
              width: adjustedLeftRightMargin,
            },
          ]}
        />
        <View
          style={[
            styles.overlayRight,
            {
              top: adjustedTopMargin,
              bottom: adjustedBottomMargin,
              width: adjustedLeftRightMargin,
            },
          ]}
        />
      </View>

      <View
        style={[
          styles.scannerBox,
          {
            left: adjustedLeftRightMargin,
            top: adjustedTopMargin,
            width: scannerBoxSize,
            height: scannerBoxSize,
          },
        ]}
      >
        <View
          style={[
            styles.corner,
            styles.topLeftCorner,
            {
              width: cornerSize,
              height: cornerSize,
            },
          ]}
        />
        <View
          style={[
            styles.corner,
            styles.topRightCorner,
            {
              width: cornerSize,
              height: cornerSize,
            },
          ]}
        />
        <View
          style={[
            styles.corner,
            styles.bottomLeftCorner,
            {
              width: cornerSize,
              height: cornerSize,
            },
          ]}
        />
        <View
          style={[
            styles.corner,
            styles.bottomRightCorner,
            {
              width: cornerSize,
              height: cornerSize,
            },
          ]}
        />
      </View>

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/icons/keyboard-arrow-left2x.png")}
            style={styles.iconArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/flash1x.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <BlurView intensity={48} style={styles.instructionsBox}>
        <View style={styles.contentWrapper}>
          <Image
            source={require("../assets/icons/scan-icon2x.png")}
            style={styles.scanIcon}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.boldText}>Scan Your Food</Text>
            <Text style={styles.descriptionText}>
              Ensure your food is well-lit and in focus for the most accurate
              scan.
            </Text>
          </View>
        </View>
      </BlurView>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/icons/gallery-icon2x.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={handleCapturePress}
        >
          <Image
            source={require("../assets/icons/button-icon1x.png")}
            style={styles.captureIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/icons/gallery-zoom2x.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  overlayTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayLeft: {
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayRight: {
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  scannerBox: {
    position: "absolute",
    zIndex: 10,
  },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  corner: {
    position: "absolute",
    borderColor: "white",
    backgroundColor: "transparent",
  },
  topLeftCorner: {
    top: -2,
    left: -2,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderTopLeftRadius: 40,
  },
  topRightCorner: {
    top: -2,
    right: -2,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderTopRightRadius: 40,
  },
  bottomLeftCorner: {
    bottom: -2,
    left: -2,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderBottomLeftRadius: 40,
  },
  bottomRightCorner: {
    bottom: -2,
    right: -2,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderBottomRightRadius: 40,
  },
  camera: {
    flex: 1,
  },
  topBar: {
    position: "absolute",
    width: "100%",
    height: 160,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  iconArrow: {
    width: 34,
    height: 34,
  },
  icon: {
    width: 24,
    height: 24,
  },
  instructionsBox: {
    position: "absolute",
    top: 120,
    left: "5%",
    width: "90%",
    height: 64,
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
    width: 32,
    height: 32,
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    gap: 4,
  },
  boldText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  descriptionText: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 16,
  },
  maskContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maskOverlay: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  bottomSection: {
    position: "absolute",
    bottom: 32,
    left: "5%",
    width: "90%",
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  captureButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  permissionButton: {
    backgroundColor: "#FFA726",
    padding: 10,
    borderRadius: 5,
  },
  permissionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  message: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default CameraScreen;
