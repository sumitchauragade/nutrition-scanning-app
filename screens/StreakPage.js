import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const StreaksPage = () => {
  return (
    <ScrollView style={styles.container}>
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
          source={require("../assets/icons/Group2x.png")} // Replace with your streak icon
          style={styles.streakIcon}
        />

        {/* Encouragement Content */}
        <View style={styles.streakContent}>
          {/* First Line of Text */}
          <Text style={styles.encouragementText}>You're on a</Text>

          {/* Streak Count */}
          <Text style={styles.streakCountText}>5 days Streak!</Text>

          {/* Encouragement Message */}
          <Text style={styles.encouragementText}>Keep it up!</Text>
        </View>
      </View>

      {/* Calendar Section */}
      <View style={styles.calendarSection}>
        {/* Calendar Image */}
        <Image
          source={require("../assets/images/calendar2x.png")} // Replace with your calendar image
          style={styles.calendarImage}
        />

        {/* Milestone Badge */}
        <View style={styles.milestoneBadge}>
          {/* Badge Icon */}
          <Image
            source={require("../assets/icons/badge2x.png")} // Replace with your badge icon
            style={styles.badgeIcon}
          />

          {/* Milestone Text */}
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
        source={require("../assets/icons/keyboard_arrow_right2x.png")} // Replace with your keyboard arrow icon
        style={styles.trailingIcon}
      />
    </TouchableOpacity>
  </View>
</View>
<View style={styles.listSection}>
  {/* List Item 1 */}
  <View style={styles.listItem}>
    {/* Badge */}
    <View style={styles.badge}>
      <Image
        source={require("../assets/icons/Silver2x.png")} // Replace with your badge icon
        style={styles.badgeIcon}
      />
    </View>

    {/* Text */}
    <Text style={styles.listItemText}>7-day streak achiever</Text>

    {/* Check Circle */}
    <View style={styles.checkCircle}>
      <Image
        source={require("../assets/icons/check2x.png")} // Replace with your check circle icon
        style={styles.checkCircleIcon}
      />
    </View>
  </View>

  {/* Add more list items as needed */}
</View>
<View style={styles.listSection}>
  {/* List Item 2 */}
  <View style={styles.listItem2}>
    {/* Badge */}
    <View style={styles.badge}>
      <Image
        source={require("../assets/icons/badge2x.png")} // Replace with your badge icon
        style={styles.badgeIcon}
      />
    </View>

    {/* Text */}
    <Text style={styles.listItemText}>10-day streak achiever</Text>

    
  </View>

  {/* Add more list items as needed */}
</View>
<View style={styles.listSection}>
  {/* List Item 3 */}
  <View style={styles.listItem3}>
    {/* Badge */}
    <View style={styles.badge}>
      <Image
        source={require("../assets/icons/Gold3x.png")} // Replace with your badge icon
        style={styles.badgeIcon}
      />
    </View>

    {/* Text */}
    <Text style={styles.listItemText}>20-day streak achiever</Text>

    
  </View>

  {/* Add more list items as needed */}
</View>
<View style={styles.listSection}>
  {/* List Item 4 */}
  <View style={styles.listItem4}>
    {/* Badge */}
    <View style={styles.badge}>
      <Image
        source={require("../assets/icons/Platinum2x.png")} // Replace with your badge icon
        style={styles.badgeIcon}
      />
    </View>

    {/* Text */}
    <Text style={styles.listItemText}>30-day streak achiever</Text>

    
  </View>

  {/* Add more list items as needed */}
</View>
    </ScrollView>
  );
};

export default StreaksPage;

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Top Navigation Bar
  navBar: {
    width: "100%",
    height: 126,
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
    zIndex: 10, // Ensures the nav bar stays on top
  },

  
  backIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    
    tintColor: "#7B7B7B", // Neutral low emphasis color
  },
  titleText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.6,
    textAlign: "center",
    color: "#141414", // Neutral high emphasis color
  },
  shareButton: {
    
  },
  shareIcon: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    width: 17.41,
    height: 20,
    paddingRight:20,
    tintColor: "#565656", // Neutral medium emphasis color
  },

  // Streaks Section
  streaksSection: {
    position: "absolute", // Makes the streaks section overlap
    top: 66, // Pushes it just below the nav bar (height of nav bar)
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

  // Calendar Section
  calendarSection: {
    width: 320,
    alignSelf: "center",
    marginTop: 200, // Adds space between streaks section and calendar
    padding: 12,
    paddingBottom: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EDEDED", // Neutral-N-200 border color
    backgroundColor: "#FFFFFF", // Neutral-N-00 background
    position: "relative", // To allow absolute positioning of the milestone badge
  },
  calendarImage: {
    width: 300,
    height: 104,
    alignSelf: "center",
    marginBottom: 16,
  },

  // Milestone Badge
  milestoneBadge: {
    position: "absolute", // To overlap the bottom of the calendar
    bottom: -14, // Adjust overlap (negative margin)
    left: "50%", // Center horizontally
    transform: [{ translateX: -93 }], // Center badge (half of its width)
    width: 186,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0D1C1",
    backgroundColor: "#FFF8F0", // Light radial gradient background
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 1, // For Android shadow
  },
  badgeIcon: {
    width: 20, // Adjust size of the badge icon as needed
    height: 20,
    marginRight: 8, // Space between badge icon and text
  },
  milestoneText: {
    fontFamily: "Roboto",
    fontSize: 12, // Label/Medium font size
    fontWeight: "400",
    lineHeight: 16,
    textAlign: "left",
    color: "#141414", // Neutral high emphasis color
  },
  milestonesSection: {
    width: 360,
    marginTop: 24,
    paddingHorizontal: 20, // Matches the padding specified in the layout
  },

  // Header Row for Milestones Title and View All Button
  milestonesHeader: {
    flexDirection: "row", // Places items in a single row
    justifyContent: "space-between", // Pushes the title to the left and button to the right
    alignItems: "center", // Aligns items vertically in the center
    marginBottom: 12, // Optional spacing below the header row
  },

  // Milestones Title
  milestonesTitle: {
    fontFamily: "Roboto",
    fontSize: 18, // Title/Large font size
    fontWeight: "600",
    lineHeight: 21.6,
    textAlign: "left",
    color: "#141414", // Neutral high emphasis color
  },

  // View All Button
  viewAllButton: {
    flexDirection: "row", // Align text and icon horizontally
    alignItems: "center", // Center vertically
    gap: 4, // Space between text and icon
    borderRadius: 16, // Small corner radius
  },

  // View All Button Text
  viewAllText: {
    fontFamily: "Roboto",
    fontSize: 14, // Button/Small font size
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "left",
    color: "#565656", // Neutral medium emphasis color
  },

  // Trailing Icon (Arrow)
  trailingIcon: {
    width: 20,
    height: 20,
    tintColor: "#565656", // Same color as the button text
  },
  // List Section
  listSection: {
    width: 320, // Full width
    height: 48,
    alignSelf: "center", // Center the list on the screen
    marginTop: 24, // Space above the list
    gap: 12, // Space between list items
  },

  // List Item
  listItem: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center vertically
    width: "100%", // Full width of the container
    paddingVertical: 12, // Top and bottom padding
    paddingHorizontal: 16, // Left and right padding
    borderRadius: 12, // Rounded corners
    backgroundColor: "#F0F4F7", // Gradient fallback color
    borderWidth: 1,
    borderColor: "#F2F5F7", // Light gray border
    position: "relative", // For absolute positioning of the badge and check circle
  },
  listItem2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F5E5D3", // Fallback for radial gradient
    borderWidth: 1,
    borderColor: "#FFF8F0", // Gradient border fallback
    position: "relative",
  },
  listItem3: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#DCEDF5", // Fallback for radial gradient
    borderWidth: 1,
    borderColor: "#EDF6FA", // Gradient border fallback
    position: "relative",
  },
  listItem4: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F5F0FF", // Fallback for radial gradient
    borderWidth: 1,
    borderColor: "#F3F0FA", // Gradient border fallback
    position: "relative",
  },

  // Badge
  badge: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12, // Space between badge and text
    borderRadius: 16, // Full circle
    backgroundColor: "#FFFFFF", // Background color for the badge
    borderWidth: 1,
    borderColor: "#DCDEE0", // Border color for the badge
  },
  badgeIcon: {
    width: 24, // Badge icon size
    height: 24,
  },

  // List Item Text
  listItemText: {
    flex: 1, // Take up remaining space
    fontFamily: "Roboto",
    fontSize: 14, // Label/Medium font size
    fontWeight: "400",
    lineHeight: 18,
    color: "#141414", // Neutral high emphasis color
  },

  // Check Circle
  checkCircle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12, // Full circle
    backgroundColor: "#66BB6A", // High emphasis neutral color
  },
  checkCircleIcon: {
    width: 16, // Check circle icon size
    height: 16,
    tintColor: "#FFFFFF", // White color for the checkmark
  },
});
