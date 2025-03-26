import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PERFIL</Text>
      
      <View style={styles.circle}>
        <Image 
          source={require('../../assets/images/Imagenes/perfilUsuario.png')} 
          style={styles.profileIcon} 
        />
      </View>
      
      <Text style={styles.username}>Nombre Usuario</Text>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Datos del Usuario</Text>
        <Text>Nombre: Nombre Usuario</Text>
        <Text>Correo Electrónico: NombreUsuario@gmail.com</Text>
        <Text>Contraseña: **********</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  profileIcon: {
    width: '60%',
    height: '60%',
  },
  username: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;