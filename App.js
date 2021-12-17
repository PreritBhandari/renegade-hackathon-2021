import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login/Login";
import { NativeBaseProvider } from "native-base";
import SignUp from "./components/SignUp/SignUp";
import Welcome from "./components/Welcome/Welcome";

const firebaseConfig = {
  apiKey: "AIzaSyCrIj9AafNOUSVcbgIdsfVuxTenKhVM8PU",

  authDomain: "alertpro-93424.firebaseapp.com",

  projectId: "alertpro-93424",

  storageBucket: "alertpro-93424.appspot.com",

  messagingSenderId: "518409853104",

  appId: "1:518409853104:web:a18cf8853cd7cac2244375",

  measurementId: "G-TPMMEF0QHP",
};

// if (!firebase.apps.length) {
const app = initializeApp(firebaseConfig);
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
