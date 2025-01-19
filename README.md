# Nutrition Scanning App

## Table of Contents:

1. Setup Instructions
2. Libraries Used and Why
3. Approach and Challenges

## Setup Instructions

To set up and run the project locally, follow these steps:

1. Clone the Repository:

   ## git clone "https://github.com/sumitchauragade/nutrition-scanning-app.git"
   
   ## cd "nutrition-scanning-app"

2. Install Dependencies:

   Ensure you have Node.js and npm/yarn installed.
   Then,run:

   ## npm install
   
4. Start the Development Server:
 
   Use the Expo CLI to start the project:

   ## expo start

6. Run on Emulator or Device:

   For iOS: Use the Expo Go app or an iOS simulator.
   
   For Android: Scan the QR code from the Expo server in the Expo Go app or run on an emulator.


## Libraries Used and Why

Below is the list of libraries and their purposes:

1. @react-native-masked-view/masked-view:
Used to implement masked views for custom UI components.

2. @react-navigation/bottom-tabs:
Provides bottom tab navigation functionality.

3. @react-navigation/native:
Core dependency for setting up navigation within the app.

4. @react-navigation/stack:
Enables stack-based navigation to handle navigation between screens.

5. expo:
The core framework for building and running the app.

6. expo-blur:
Used to create blurred backgrounds or effects.

7. expo-camera:
Provides access to the device's camera for functionalities like scanning or capturing images.

8. expo-status-bar:
For customizing and managing the app's status bar.

9. react:
A foundational library for building UI components.

10. react-native:
The core library for developing mobile apps in React Native.

11. react-native-chart-kit:
Used for rendering charts and graphs within the app.

12. react-native-gesture-handler:
Handles touch gestures like swiping, dragging, etc., in the app.

13. react-native-reanimated:
Provides powerful animations and transitions for React Native components.

14. react-native-safe-area-context:
Manages safe area insets on devices with notches or rounded corners.

15. react-native-screens:
Optimizes screen transitions and improves navigation performance.

16. react-native-svg:
Enables scalable vector graphics (SVG) rendering for UI components.

17. react-navigation:
Provides a comprehensive navigation system for the app.

18. expo-linear-gradient:
For creating visually appealing linear gradients.

# Approach and Challenges

## Approach

1. Static Design from Figma:

The first step was to create a static design for the app by closely following the provided Figma design. This ensured that the app's UI matched the desired look and feel.

2. Screen Development:

After completing the static design, the necessary screens were developed using React Native. Each screen was structured and styled to align with the static design created earlier.

3. Adding Functionality:

Once the screens were ready, the required functionalities were implemented as per the project requirements. This included handling navigation, interactivity, and dynamic data rendering.

## Challenges

1. Implementing Camera Functionality:

One of the main challenges was properly implementing the camera functionality using expo-camera. Configuring permissions and ensuring seamless camera operation across devices required careful testing and debugging.

2. Bottom Tab Navigation:

Setting up the bottom tab navigation using @react-navigation/bottom-tabs was another challenge. Ensuring smooth transitions and proper integration with stack navigation required thorough understanding and effort.
   

  


