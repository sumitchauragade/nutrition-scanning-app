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
import { useNavigation } from "@react-navigation/native";
import MockData from "../data/mockData";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Text as SvgText,
} from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const graphWidth = 288;
const graphHeight = 84;
const barWidth = 12;
const gradientColors = {
  start: "#E29523",
  end: "#5CA660",
};

const weeklyData = [50, 70, 100, 120, 80, 90, 60];
const labels = ["S", "M", "T", "W", "T", "F", "S"];

const NutritionResultsPage = () => {
  const navigation = useNavigation();

  const maxValue = Math.max(...weeklyData);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.foodImageSection}>
        <Image
          source={require("../assets/images/banner2x.png")}
          style={styles.foodImage}
        />

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("../assets/icons/keyboard-arrow-left2x.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nutrition Results</Text>
        </View>

        <View style={styles.gradientFrame}>
          <View style={styles.foodTag}>
            <Text style={styles.foodText}>FOOD</Text>
          </View>

          <Text style={styles.foodTitleText}>Pepperoni Pizza</Text>
        </View>
      </View>

      <View style={styles.nutritionFrame}>
        <Text style={styles.nutritionTitle}>Nutritional Overview:</Text>

        <View style={styles.informationSection}>
          <View style={styles.caloriesSection}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/Calories2x.png")}
                style={styles.icon}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.contentTitle}>Calories</Text>
              <Text style={styles.contentValue}>{MockData.calories}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.micronutrientsFrame}>
        <View style={styles.micronutrientsHeader}>
          <Text style={styles.micronutrientsTitle}>Micronutrients</Text>
          <Text style={styles.totalMicroText}>Total: 10g</Text>
        </View>

        <View style={styles.micronutrientCardsContainer}>
          <View style={styles.micronutrientCard}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/Proteins2x.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Proteins</Text>
              <Text style={styles.cardValue}>
                {MockData.macronutrients.proteins}
              </Text>
            </View>
          </View>

          <View style={styles.micronutrientCard}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/Carbs2x.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Carbs</Text>
              <Text style={styles.cardValue}>
                {MockData.macronutrients.carbs}
              </Text>
            </View>
          </View>

          <View style={styles.micronutrientCard}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/Fats2x.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Fats</Text>
              <Text style={styles.cardValue}>
                {MockData.macronutrients.fats}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.micronutrientsFrame}>
        <View style={styles.micronutrientsHeader}>
          <Text style={styles.micronutrientsTitle}>Micronutrients</Text>
          <Text style={styles.totalMicroText}>Total: 30%</Text>
        </View>

        <View style={styles.micronutrientCardsContainer}>
          <View style={styles.micronutrientCard}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/Vitamin2x.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Iron</Text>
              <Text style={styles.cardValue}>
                {MockData.micronutrients.iron}
              </Text>
            </View>
          </View>

          <View style={styles.micronutrientCard}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/icons/Calcium2x.png")}
                style={styles.icon}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Calcium</Text>
              <Text style={styles.cardValue}>
                {MockData.micronutrients.calcium}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.weeklyMealNutritionContainer}>
        <Text style={styles.weeklyMealNutritionTitle}>
          Weekly Meal Nutrition
        </Text>

        <View style={styles.graphContainer}>
          <Svg height={graphHeight + 20} width={graphWidth}>
            <Defs>
              <LinearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0%" stopColor={gradientColors.start} />
                <Stop offset="100%" stopColor={gradientColors.end} />
              </LinearGradient>
            </Defs>

            {weeklyData.map((value, index) => {
              const barHeight = (value / maxValue) * graphHeight;
              const x =
                index * ((graphWidth - barWidth) / (weeklyData.length - 1));
              const y = graphHeight - barHeight;

              return (
                <Rect
                  key={`bar-${index}`}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={6}
                  fill="url(#barGradient)"
                />
              );
            })}

            {labels.map((label, index) => {
              const x =
                index * ((graphWidth - barWidth) / (weeklyData.length - 1)) +
                barWidth / 2;
              const y = graphHeight + 10;

              return (
                <SvgText
                  key={`label-${index}`}
                  x={x}
                  y={y}
                  fontSize="10"
                  fill="#141414"
                  textAnchor="middle"
                >
                  {label}
                </SvgText>
              );
            })}
          </Svg>
        </View>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save to Daily Log</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.premiumLinkContainer}>
          <Text style={styles.premiumLinkText}>
            Want more insights? Upgrade to Premium
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentContainer: {
    paddingBottom: 20,
  },

  foodImageSection: {
    width: "100%",
    height: 268,
    position: "relative",
  },
  foodImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    position: "absolute",
    top: 32,
    width: "100%",
    height: 82,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
    opacity: 1,
  },
  headerTitle: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.6,
    textAlign: "center",
    color: "#FFFFFF",
  },
  gradientFrame: {
    position: "absolute",
    top: 216,
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: "rgba(240, 229, 229, 0.68)",
    justifyContent: "center",
    gap: 8,
  },
  foodTag: {
    width: 40,
    height: 14,
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  foodText: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 10,
    letterSpacing: 0.04,
    textAlign: "left",
    color: "#141414",
  },
  foodTitleText: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
    color: "#141414",
    marginTop: 8,
  },

  nutritionFrame: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  nutritionTitle: {
    width: 320,
    height: 16,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "left",
    color: "#141414",
    marginBottom: 12,
  },
  informationSection: {
    gap: 24,
  },
  caloriesSection: {
    width: 154,
    height: 54,
    minWidth: 140,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 21.19,
    height: 26.67,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 2,
  },
  contentTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#565656",
  },
  contentValue: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#141414",
  },

  micronutrientsFrame: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  micronutrientsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  micronutrientsTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "left",
    color: "#141414",
  },
  totalMicroText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "right",
    color: "#565656",
  },
  micronutrientCardsContainer: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  micronutrientCard: {
    width: 154,
    height: 54,
    minWidth: 140,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    gap: 2,
  },
  cardTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#565656",
  },
  cardValue: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#141414",
  },

  weeklyMealNutritionContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 20,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 12,
  },
  weeklyMealNutritionTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21.6,
    color: "#141414",
    marginBottom: 8,
  },
  graphContainer: {
    width: graphWidth,
    height: graphHeight,
    alignSelf: "center",
    justifyContent: "space-between",
  },

  actionButtonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 12,
  },

  saveButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E29523",
    backgroundColor: "#FFA726",
  },
  saveButtonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#141414",
    textAlign: "center",
  },

  premiumLinkContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  premiumLinkText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#141414",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default NutritionResultsPage;
