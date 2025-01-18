import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const StreaksPage = () => {
  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.streaksSection}>
        <Image
          source={require("../assets/icons/Group2x.png")}
          style={styles.streakIcon}
        />

        <View style={styles.streakContent}>
          <Text style={styles.encouragementText}>You're on a</Text>

          <Text style={styles.streakCountText}>5 days Streak!</Text>

          <Text style={styles.encouragementText}>Keep it up!</Text>
        </View>
      </View>

      <View style={styles.calendarSection}>
        <Image
          source={require("../assets/images/calendar2x.png")}
          style={styles.calendarImage}
        />

        <View style={styles.milestoneBadge}>
          <Image
            source={require("../assets/icons/badge2x.png")}
            style={styles.badgeIcon}
          />

          <Text style={styles.milestoneText}>10-day streak achiever</Text>
        </View>
      </View>
      <View style={styles.milestonesSection}>
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
  );
};

export default StreaksPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  navBar: {
    width: "100%",
    height: 126,
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,

    tintColor: "#7B7B7B",
  },
  titleText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.6,
    textAlign: "center",
    color: "#141414",
  },
  shareButton: {},
  shareIcon: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    width: 17.41,
    height: 20,
    paddingRight: 20,
    tintColor: "#565656",
  },

  streaksSection: {
    position: "absolute",
    top: 66,
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
    gap: 24,
  },
  streakIcon: {
    width: 94.62,
    height: 120,
    shadowColor: "#FFA726",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 8,
  },
  streakContent: {
    width: 320,
    alignItems: "center",
    gap: 2,
  },
  encouragementText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#565656",
  },
  streakCountText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.6,
    textAlign: "center",
    color: "#141414",
  },

  calendarSection: {
    width: 320,
    alignSelf: "center",
    marginTop: 200,
    padding: 12,
    paddingBottom: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EDEDED",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  calendarImage: {
    width: 300,
    height: 104,
    alignSelf: "center",
    marginBottom: 16,
  },

  milestoneBadge: {
    position: "absolute",
    bottom: -14,
    left: "50%",
    transform: [{ translateX: -93 }],
    width: 186,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0D1C1",
    backgroundColor: "#FFF8F0",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1,
  },
  badgeIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  milestoneText: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    textAlign: "left",
    color: "#141414",
  },
  milestonesSection: {
    width: 360,
    marginTop: 24,
    paddingHorizontal: 20,
  },

  milestonesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  milestonesTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.6,
    textAlign: "left",
    color: "#141414",
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 16,
  },

  viewAllText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "left",
    color: "#565656",
  },

  trailingIcon: {
    width: 20,
    height: 20,
    tintColor: "#565656",
  },
  listSection: {
    width: 320,
    height: 48,
    alignSelf: "center",
    marginTop: 24,
    gap: 12,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F0F4F7",
    borderWidth: 1,
    borderColor: "#F2F5F7",
    position: "relative",
  },
  listItem2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F5E5D3",
    borderWidth: 1,
    borderColor: "#FFF8F0",
    position: "relative",
  },
  listItem3: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#DCEDF5",
    borderWidth: 1,
    borderColor: "#EDF6FA",
    position: "relative",
  },
  listItem4: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F5F0FF",
    borderWidth: 1,
    borderColor: "#F3F0FA",
    position: "relative",
  },

  badge: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCDEE0",
  },
  badgeIcon: {
    width: 24,
    height: 24,
  },

  listItemText: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#141414",
  },

  checkCircle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#66BB6A",
  },
  checkCircleIcon: {
    width: 16,
    height: 16,
    tintColor: "#FFFFFF",
  },
});
