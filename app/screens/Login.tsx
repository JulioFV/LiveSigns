import React, { useState} from 'react';
import { View, Alert,Text, TextInput, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Interprete from './Interprete';
import Registro from './Registro';

import { NavigationProp } from '@react-navigation/native';
import { db} from "../../firebaseConfig"; // Ajusta la ruta según tu estructura
import { collection, query, where, getDocs } from "firebase/firestore";

type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

const App = ({navigation}: {navigation: NavigationProp<any>}) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    try {
      const q = query(collection(db, "usuarios"), where("correo", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        console.log("Usuario no encontrado");
        Alert.alert("Usuario no encontrado");
        return false;
      }
  
      // 2. Obtiene el primer documento (asumiendo que el email es único)
      const userDoc = querySnapshot.docs[0].data();
  
      // 3. Compara la contraseña (¡en producción usa Firebase Auth!)
      var contrasenia = `"${password}"`;
      console.log("Contraseña ingresada:", password);
      if (userDoc.password === password) {
        console.log("Login exitoso:", userDoc);
        Alert.alert("Login exitoso");
        navigation.navigate('Interprete');
        return true;
      } else {
        console.log("Contraseña incorrecta");
        Alert.alert("Contraseña incorrecta");
        return false;
      }
    } catch (error) {
      Alert.alert("Error en login", (error as Error).message);
      console.error("Error en login:", error);
      return false;
    }
  };


  return (
    <PaperProvider>
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
          <Text style={styles.text}  >Email</Text>
          <TextInput
            style={styles.input}
            placeholder="LiveSigns@itsoeh.edu.mx"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email} 
            onChangeText={setEmail}
            placeholderTextColor="#050a30"
          />
          <Text style={styles.text}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry
            placeholderTextColor="#050a30"
            value={password}
            onChangeText={setPassword}
          />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
          <Text style={styles.footer}>Recuperar Contraseña</Text>
          <Text style={styles.footer} onPress={()=> navigation.navigate('Registro')}>¿No tienes cuenta? Regístrate</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', 
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