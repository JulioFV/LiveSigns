import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Interprete from "../screens/Interprete";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Registro from "../screens/Registro";
import Perfil from "../screens/Perfil";
import RecoveryPassword from "../screens/RecoveryPassword";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name = "Interprete" component={Interprete} options={{ headerShown: false }}/>
        <Stack.Screen name = "Registro" component={Registro} options={{ headerShown: false }}/>
        <Stack.Screen name = "Perfil" component={Perfil} options={{ headerShown: false }}/>
        <Stack.Screen name = "RecoveryPassword" component={RecoveryPassword} options={{ headerShown: false }}/>
    </Stack.Navigator>
    );
};
    
export default AppNavigation;
