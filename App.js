
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen';
import MovieScreen from './src/screens/MovieScreen';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';




const Stack = createStackNavigator()


export default () => {
  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/Nunito-Regular.ttf"),
    Bold: require("./assets/fonts/Nunito-Bold.ttf"),
    Black: require("./assets/fonts/Nunito-Black.ttf"),
    ExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/Nunito-ExtraLight.ttf"),
    Light: require("./assets/fonts/Nunito-Light.ttf"),
    SemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  return fontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="movie"
          component={MovieScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  ) : (
    <AppLoading />
  );
};

