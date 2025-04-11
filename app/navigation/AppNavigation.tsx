import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Interprete from "../screens/Interprete";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Registro from "../screens/Registro";
import Perfil from "../screens/Perfil";

import Explora from "../screens/Explora";
import Diccionario from "../screens/Diccionario";
import Juegos from "../screens/Juegos";
import Contrasenia from "../screens/Contrasenia";

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
        <Stack.Screen name = "Juegos" component={Juegos} options={{ headerShown: false }}/>
        <Stack.Screen name = "Explora" component={Explora} options={{ headerShown: false }}/>
        <Stack.Screen name = "Diccionario" component={Diccionario} options={{ headerShown: false }}/>
        <Stack.Screen name = "Contrasenia" component={Contrasenia} options={{ headerShown: false }}/>
        <Stack.Screen name = "RecoveryPassword" component={RecoveryPassword} options={{ headerShown: false }}/>
    </Stack.Navigator>
    );
};
    
export default AppNavigation;
