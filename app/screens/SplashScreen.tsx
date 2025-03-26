import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import Interprete from './Interprete';
import Login from './Login';

interface Props {
    navigation: StackNavigationProp<any>;
  }

  const SplashScreen = ({ navigation }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        navigation.replace('Login'); // Navega a la pantalla principal
      }, 3000); // Duración del splash screen en milisegundos
  
      return () => clearTimeout(timer);
    }, [navigation]);

  return (
    <View style={styles.container}>

        <Text style={styles.text}>Bienvenido</Text>
        <Text style={styles.title}>LiveSigns</Text>
        <Image source={require('../../assets/images/Imagenes/logo.png')} style={styles.logo} />
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size="large" color="#007BFF" style={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loading: {
    marginTop: 20,
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 20,
    marginTop: 20,
  },
  logo1: {
    width: 350,
    height: 150,
    marginBottom: 20,
    marginTop: 20,
    position: 'absolute',
    top: 300,
    left: 50,
  },
  logot: {
    width: 70,
    height: 90,
    marginBottom: 20,
    marginTop: 20,
    position: 'absolute',
    top: 310,
    left: 80,
  },
  logot1: {
    width: 50,
    height: 90,
    marginBottom: 20,
    marginTop: 20,
    position: 'absolute',
    top: 310,
    left: 170,
  },
  logot2: {
    width: 50,
    height: 90,
    marginBottom: 20,
    marginTop: 20,
    position: 'absolute',
    top: 310,
    left: 240,
  },
  logot3: {
    width: 50,
    height: 90,
    marginBottom: 20,
    marginTop: 20,
    position: 'absolute',
    top: 310,
    left: 300,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 20,
  },
  progressBar: {
    width: '80%',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default SplashScreen;