
import React, {useState, useEffect} from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen';
import MovieScreen from './src/screens/MovieScreen';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';
import LoginScreen from './src/screens/LoginScreen';
import {EventRegister} from "react-native-event-listeners";
import themeContext from './src/config/themeContext';
import theme from './src/config/theme';




const Stack = createStackNavigator()
export default () => {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  });

  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/Nunito-Regular.ttf"),
    Bold: require("./assets/fonts/Nunito-Bold.ttf"),
    Black: require("./assets/fonts/Nunito-Black.ttf"),
    ExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/Nunito-ExtraLight.ttf"),
    Light: require("./assets/fonts/Nunito-Light.ttf"),
    SemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    Ultra: require("./assets/fonts/Ultra-Regular.ttf"),
  });




  return fontLoaded ? (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>   
      <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
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
    </themeContext.Provider>
  ) : (
    <AppLoading />
  );
  
};

