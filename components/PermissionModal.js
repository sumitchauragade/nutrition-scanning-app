import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from "react-native";

const PermissionModal = ({
  visible,
  onRequestPermission,
  onCloseModal,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Close Icon */}
          <TouchableOpacity style={styles.closeIcon} onPress={onCloseModal}>
            <Image
              source={require("../assets/icons/close_small2x.png")} // Replace with your close icon
              style={styles.closeIconImage}
            />
          </TouchableOpacity>

          {/* Camera Icon */}
          <View style={styles.cameraIconContainer}>
            <Image
              source={require("../assets/icons/camera2x.png")} // Replace with your camera icon
              style={styles.cameraIcon}
            />
          </View>

          {/* Permission Text */}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>
              Allow “Nutrition Scanning” to use your camera?
            </Text>
            <Text style={styles.descriptionText}>
              You can change this setting in the App section of your device
              Settings.
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            {/* Allow Access Button */}
            <TouchableOpacity
              style={styles.allowButton}
              onPress={onRequestPermission}
            >
              <Text style={styles.allowButtonText}>Allow Access</Text>
            </TouchableOpacity>

            {/* Don't Allow Button */}
            <TouchableOpacity style={styles.denyButton} onPress={onCloseModal}>
              <Text style={styles.denyButtonText}>Don't Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: 280,
    height: 336,
    padding: 24,
    backgroundColor: "#FFFFFF", // Modal background
    borderRadius: 12,
    shadowColor: "#121212",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 5, // For Android shadow
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeIcon: {
    alignSelf: "flex-end",
    width: 24,
    height: 24,
  },
  closeIconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cameraIconContainer: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  cameraIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  titleText: {
    fontFamily: "Roboto",
    fontSize: 20, // Title medium size
    fontWeight: "600",
    textAlign: "center",
    color: "#141414",
    marginBottom: 8,
  },
  descriptionText: {
    fontFamily: "Inter",
    fontSize: 12, // Extra small label size
    fontWeight: "500",
    textAlign: "center",
    color: "#565656",
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  allowButton: {
    width: "100%",
    height: 44,
    backgroundColor: "#FFA726",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E29523",
  },
  allowButtonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    color: "#141414",
  },
  denyButton: {
    width: "100%",
    height: 44,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EDEDED",
  },
  denyButtonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    color: "#141414",
  },
});

export default PermissionModal;
