import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const FoodScanningPage = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/images/background-Image1x.png")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/keyboard-arrow-left2x.png")}
            style={styles.icon}
          />
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
        <TouchableOpacity style={styles.captureButton}
        onPress={() => navigation.navigate('ScanningProgress')}>
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
    width: 360,
    height: 132,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  instructionsBox: {
    position: "absolute",
    top: 108,
    //left: 20,
    width: 320,
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  descriptionText: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 16,
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
    top: 686,
    width: 320,
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 0,
    borderRadius: 12,
  },

  galleryIconWrapper: {
    width: 40,
    height: 40,
    paddingTop: 8,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  galleryIcon: {
    width: 24,
    height: 24,
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
  captureButtonIcon: {
    width: 36,
    height: 36,
  },

  oneXIconWrapper: {
    width: 40,
    height: 40,
    paddingTop: 8,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  oneXIcon: {
    width: 24,
    height: 24,
  },
});

export default FoodScanningPage;
