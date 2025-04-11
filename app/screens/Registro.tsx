import React, { useState } from 'react';
import { View, Text,Modal,ActivityIndicator, Alert,TextInput, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './Login';
import { db} from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { NavigationProp } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const auth = getAuth();

const App = ({navigation}: {navigation: NavigationProp<any>}) => {
  
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nombre, setNombre] = useState<string>('');


  const registrarUsuario = async () => {
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
      Alert.alert('Error', 'El correo electrónico no es válido');
      return;
    } else if (password.length < 8) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres');
      return;
    } else if (!email || !password || !nombre) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }else if (password.includes('*')|| password.includes('!')|| password.includes('@')|| password.includes('#')|| password.includes('$')|| password.includes('%')) {
      Alert.alert('Error', 'La contraseña no debe contener caracteres especiales como * ! @ # $ %');
      return;
    }

    try {
      setLoading(true);
      const normalizedEmail = email.trim().toLowerCase();
      const UserCedential = await createUserWithEmailAndPassword(auth, normalizedEmail, password);
      const user = UserCedential.user;
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
      } else {
        Alert.alert('Error', 'No se pudo enviar el correo de verificación');
        throw new Error('Ningun usuario autenticado');
            }

      const docRef = await addDoc(collection(db, 'usuarios'), {
        nombre,
        correo: email,
        password,
        creadoEn: new Date()
      });

      console.log('Usuario registrado con ID: ', docRef.id);
      Alert.alert('Éxito', `Usuario registrado con ID: ${docRef.id} . Se ha enviado un correo de verificación.`);
      setEmail('');
      setPassword('');
      setNombre('');
    } catch (error: any) {
      setLoading(false);
      console.error('Error al registrar usuario:', error);

          let mensaje = 'No se pudo registrar el usuario';

          switch (error.code) {
            case 'auth/email-already-in-use':
              mensaje = 'El correo electrónico ya está en uso.';
              break;
            case 'auth/invalid-email':
              mensaje = 'El correo electrónico no es válido.';
              break;
            case 'auth/weak-password':
              mensaje = 'La contraseña es muy débil. Debe tener al menos 6 caracteres.';
              break;
            case 'auth/operation-not-allowed':
              mensaje = 'No se permite crear cuentas en este momento.';
              break;
            default:
              mensaje = error.message || mensaje;
              break;
          }

          Alert.alert('Error', mensaje);
    }finally {
      setLoading(false);
    }
  }
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
            value={nombre}
            onChangeText={setNombre}
            placeholderTextColor="#fff"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="LiveSigns@gmail.com"
            keyboardType='email-address'
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor="#fff"
          />
          <Text style={styles.text}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="* * * * * * * * * *"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#fff"
            
          />
        <TouchableOpacity style={styles.button} onPress={registrarUsuario}>
            <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
          <Text style={styles.footer} onPress={()=> navigation.navigate('Login')} >¿Ya tienes cuenta? Inicia Sesión</Text>
        </View>
        <Modal transparent={true} visible={loading} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={require('../../assets/images/Imagenes/logo.png')} style={styles.logo} />
              <Text style={styles.textoModal}>Espera...</Text>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  textoModal:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#12229d',
    marginBottom: 10,
    marginTop: 10,
  },
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