import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './Login';

import { NavigationProp } from '@react-navigation/native';

const App = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/images/Imagenes/logo1.png')} style={styles.logo} />
        <View style={styles.card}>
          <Text style={styles.label}>Registro</Text>
          <Text style={styles.text}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Live Signs"
            keyboardType="ascii-capable"
            autoCapitalize="none"
            placeholderTextColor="#fff"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="LiveSigns@gmail.com"
            keyboardType='email-address'
            autoCapitalize="none"
            placeholderTextColor="#fff"
          />
          <Text style={styles.text}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="* * * * * * * * * *"
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#fff"
          />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
          <Text style={styles.footer} onPress={()=> navigation.navigate('Login')} >¿Ya tienes cuenta? Inicia Sesión</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#050a30', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#12229d',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#050a30',
    textAlign: 'left',
    marginTop: 10,
  },
  card: {
    width: '100%',
    height: '65%',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 35,
  },
  label: {
    fontSize: 24,
    color: '#050a30',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 110,
    marginBottom: 80,
    marginTop: 50,
  },
  input: {
    height: 50,
    borderColor: '#050a30',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#050a30',
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    color: '#fff',
  },
  footer: {
    marginTop: 20,
    color: '#050a30',
    textAlign: 'center',
  },
  container1: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 5, 
  },
  image: {
    height: 150, 
    width: 200, 
    marginHorizontal: 10, 
  },
  image1: {
    height: 100, 
    width: 150, 
    marginHorizontal: 10, 
  },
  button: {
    backgroundColor: '#fff', 
    borderRadius: 25, 
    borderColor: '#050a30',
    borderWidth: 2,
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
  },
  buttonText: {
    color: '#050a30', 
    fontSize: 18,
  },
});

export default App;