import React, { useState } from 'react';
import { View, Alert, Text, Modal, TextInput, ActivityIndicator, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Interprete from './Interprete';
import Registro from './Registro';
import Contrasenia from './Contrasenia';

import { NavigationProp } from '@react-navigation/native';
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

const App = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const auth = getAuth(); // Initialize Firebase Auth

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validarCampos = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return; // Detiene la ejecución
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'El correo electrónico debe contener @');
      return;
    }

    if (!email.includes('.')) {
      Alert.alert('Error', 'El correo electrónico debe contener un punto (.)');
      return;
    }

    if (email.length < 5) {
      Alert.alert('Error', 'El correo electrónico es demasiado corto');
      return;
    }

    handleLogin();
  };

  const handleLogin = async () => {
    setLoading(true); // Mostrar el modal de carga
  
    try {
      const normalizedEmail = email.trim().toLowerCase();
  
      // Primero buscamos en Firestore los datos del usuario
      const q = query(collection(db, 'usuarios'), where('correo', '==', normalizedEmail));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        Alert.alert('Error', 'Usuario no encontrado');
        return;
      }
  
      const userDoc = querySnapshot.docs[0].data();
  
      // Intentamos iniciar sesión con Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, normalizedEmail, password);
      const user = userCredential.user;
  
      // Verificar si el correo está verificado
      if (!user.emailVerified) {
        Alert.alert(
          'Correo no verificado',
          'Tu correo no ha sido verificado. ¿Deseas reenviar el correo de verificación?',
          [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'Reenviar',
              onPress: async () => {
                await sendEmailVerification(user);
                Alert.alert('Correo enviado', 'Se ha reenviado el correo de verificación.');
              }
            }
          ]
        );
        return;
      }
      // Si el login y la verificación son correctas, navegar a la pantalla deseada
      Alert.alert('Login exitoso');
      navigation.navigate('Interprete', { user: userDoc });
  
    } catch (error) {
      Alert.alert(
        'Error en login',
        error instanceof Error ? error.message : 'Ocurrió un error desconocido'
      );
    } finally {
      setLoading(false);
    }
  };


return (
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../assets/images/Imagenes/itsoeh.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/Imagenes/isic.jpg')}
          style={styles.image1}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>LiveSigns</Text>
      <Image source={require('../../assets/images/Imagenes/logo.png')} style={styles.logo} />
      <View style={styles.card}>
        <Text style={styles.label}>Inicia Sesión</Text>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="LiveSigns@itsoeh.edu.mx"
          keyboardType="email-address"
          autoCapitalize="none"
          inputMode='email'
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#050a30"
        />
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="#050a30"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={validarCampos}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Modal transparent={true} visible={loading} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../../assets/images/Imagenes/logo.png')} style={styles.logo} />
              <Text style={styles.textoModal}>Espera...</Text>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          </View>
        </Modal>
        
        <Text style={styles.footer} onPress={() => navigation.navigate('RecoveryPassword')}>¿Olvidaste tu contraseña?</Text> 
        <Text style={styles.footer} onPress={() => navigation.navigate('Registro')}>¿No tienes cuenta? Regístrate</Text>
      </View>
    </SafeAreaView>
  </ScrollView>
);
          <Text style={styles.footer} onPress={()=> navigation.navigate('Contrasenia')} >Recuperar Contraseña</Text>
          <Text style={styles.footer} onPress={()=> navigation.navigate('Registro')}>¿No tienes cuenta? Regístrate</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  textoModal:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12229d',
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  // ESTILOS DEL MODAL
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  //TERMINAN ESTILOS DEL MODAL
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#12229d',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginTop: 10,
  },
  card: {
    width: '100%',
    height: '60%',
    padding: 20,
    backgroundColor: '#007BFF',
    borderRadius: 35,
  },
  label: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 110,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 15,
    opacity: 0.8,
    width: '100%',
    color: '#050a30',
  },
  footer: {
    marginTop: 20,
    color: '#fff',
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
    backgroundColor: '#050a30',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default App;