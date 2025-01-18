import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window"); // Get screen dimensions for responsiveness

const StreaksPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Top Navigation Bar */}
        <View style={styles.navBar}>
          <View style={styles.backButton}>
            <Image
              source={require("../assets/icons/keyboard-arrow-left2x.png")}
              style={styles.backIcon}
            />
          </View>
          <Text style={styles.titleText}>Streaks</Text>
          <View style={styles.shareButton}>
            <Image
              source={require("../assets/icons/share2x.png")}
              style={styles.shareIcon}
            />
          </View>
        </View>

        {/* Streaks Section */}
        <View style={styles.streaksSection}>
          {/* Streak Icon */}
          <Image
            source={require("../assets/icons/Group2x.png")}
            style={styles.streakIcon}
          />

          {/* Encouragement Content */}
          <View style={styles.streakContent}>
            <Text style={styles.encouragementText}>You're on a</Text>
            <Text style={styles.streakCountText}>5 days Streak!</Text>
            <Text style={styles.encouragementText}>Keep it up!</Text>
          </View>
        </View>

        {/* Calendar Section */}
        <View style={styles.calendarSection}>
          {/* Calendar Image */}
          <Image
            source={require("../assets/images/calendar2x.png")}
            style={styles.calendarImage}
          />

          {/* Milestone Badge */}
          <View style={styles.milestoneBadge}>
            <Image
              source={require("../assets/icons/badge2x.png")}
              style={styles.badgeIcon}
            />
            <Text style={styles.milestoneText}>10-day streak achiever</Text>
          </View>
        </View>

        {/* Milestones Section */}
        <View style={styles.milestonesSection}>
          {/* Title and View All Button in One Row */}
          <View style={styles.milestonesHeader}>
            <Text style={styles.milestonesTitle}>Milestones</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Image
                source={require("../assets/icons/keyboard_arrow_right2x.png")}
                style={styles.trailingIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* List Section */}
        <View style={styles.listSection}>
          <View style={styles.listItem}>
            <View style={styles.badge}>
              <Image
                source={require("../assets/icons/Silver2x.png")}
                style={styles.badgeIcon}
              />
            </View>
            <Text style={styles.listItemText}>7-day streak achiever</Text>
            <View style={styles.checkCircle}>
              <Image
                source={require("../assets/icons/check2x.png")}
                style={styles.checkCircleIcon}
              />
            </View>
          </View>
        </View>

        {/* Add More List Items */}
        <View style={styles.listSection}>
          <View style={styles.listItem2}>
            <View style={styles.badge}>
              <Image
                source={require("../assets/icons/badge2x.png")}
                style={styles.badgeIcon}
              />
            </View>
            <Text style={styles.listItemText}>10-day streak achiever</Text>
          </View>
        </View>

        <View style={styles.listSection}>
          <View style={styles.listItem3}>
            <View style={styles.badge}>
              <Image
                source={require("../assets/icons/Gold3x.png")}
                style={styles.badgeIcon}
              />
            </View>
            <Text style={styles.listItemText}>20-day streak achiever</Text>
          </View>
        </View>

        <View style={styles.listSection}>
          <View style={styles.listItem4}>
            <View style={styles.badge}>
              <Image
                source={require("../assets/icons/Platinum2x.png")}
                style={styles.badgeIcon}
              />
            </View>
            <Text style={styles.listItemText}>30-day streak achiever</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default StreaksPage;

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // ScrollView container
  scrollContainer: {
    paddingBottom: 20, // Add padding at the bottom for spacing
  },

  // Top Navigation Bar
  navBar: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.1, // Make nav bar height responsive
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#7B7B7B",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#141414",
  },
  shareIcon: {
    width: 22,
    height: 22,
    tintColor: "#565656",
  },

  // Streaks Section
  streaksSection: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
  },
  streakIcon: {
    width: SCREEN_WIDTH * 0.3, // Responsive width
    height: SCREEN_WIDTH * 0.4, // Responsive height
  },
  streakContent: {
    alignItems: "center",
  },
  encouragementText: {
    fontSize: 14,
    color: "#565656",
  },
  streakCountText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#141414",
  },

  // Calendar Section
  calendarSection: {
    width: SCREEN_WIDTH * 0.9, // 90% of the screen width
    alignSelf: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EDEDED",
    backgroundColor: "#FFFFFF",
    marginTop: 20,
  },
  calendarImage: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.2, // Responsive height
  },
  milestoneBadge: {
    position: "absolute",
    bottom: -16,
    left: "50%",
    transform: [{ translateX: -93 }],
    width: 186,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0D1C1",
    backgroundColor: "#FFF8F0",
  },
  milestoneText: {
    fontSize: 12,
    color: "#141414",
  },

  // Milestones Section
  milestonesSection: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 24,
  },
  milestonesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  milestonesTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#141414",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 14,
    color: "#565656",
  },
  trailingIcon: {
    width: 20,
    height: 20,
    tintColor: "#565656",
  },

  // List Section
  listSection: {
    width: SCREEN_WIDTH * 0.9, // 90% of the screen width
    alignSelf: "center",
    marginTop: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F0F4F7",
    borderWidth: 1,
    borderColor: "#F2F5F7",
    marginBottom: 12,
  },
  badge: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DCDEE0",
  },
  badgeIcon: {
    width: 24,
    height: 24,
  },
  listItemText: {
    flex: 1,
    fontSize: 14,
    color: "#141414",
  },
  checkCircle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66BB6A",
    borderRadius: 12,
  },
  checkCircleIcon: {
    width: 16,
    height: 16,
    tintColor: "#FFFFFF",
  },
});
