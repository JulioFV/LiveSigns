import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Interprete from './Interprete';
import Explora from './Explora';
import Diccionario from './Diccionario';
import Juegos from './Juegos';

const App = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container3}>
      <Text style={styles.header}>PERFIL</Text>
      
      <View style={styles.circle1}>
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
      {/* Barra de navegación inferior */}
            <View style={styles.container1}>
              <TouchableOpacity onPress={() => navigation.navigate('Interprete')}>
              <View style={styles.circle}>
                <Image source={require('../../assets/images/Imagenes/interprete.png')} style={styles.largeIcon} />
              </View>
              </TouchableOpacity>
              <View style={styles.icons}>
                <View style={styles.iconItem}>
                  <TouchableOpacity onPress={() => navigation.navigate('Explora')}>
                    <Image source={require('../../assets/images/Imagenes/explora.png')} style={styles.smallIcon} />
                    <Text>Explora</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.iconItem}>
                  <TouchableOpacity onPress={() => navigation.navigate('Diccionario')}>
                    <Image source={require('../../assets/images/Imagenes/diccionario.png')} style={styles.smallIcon} />
                    <Text>Alfabeto</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.title}>INTERPRETE</Text>
                <View style={styles.iconItem}>
                  <TouchableOpacity onPress={() => navigation.navigate('Juegos')}>
                  <Image source={require('../../assets/images/Imagenes/juegos.png')} style={styles.smallIcon} />
                  <Text>Juegos</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.iconItem}>
                    <Image source={require('../../assets/images/Imagenes/perfil.png')} style={styles.smallIcon} />
                    <Text>Perfil</Text>
                </View>
              </View>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
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
  circle1: {
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
  container2: {
    flex: 1,
    backgroundColor: '#cae8ff',
    padding: 20,
    width: '100%',
    height: '100%',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#3a9bdc',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  grid: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardLetter: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#0056b3',
    padding: 0,
    borderRadius: 0,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 0,
    width: '100%',
    height: '18%',
    position: 'relative',
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  largeIcon: {
    width: '90%',
    height: '90%',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  iconItem: {
    alignItems: 'center',
    marginTop: -55,
    flex: 1,
  },
  smallIcon: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  tab: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  interpreterIcon: {
    width: 40,
    height: 40,
  },
  tabText: {
    color: '#050a30',
    fontSize: 12,
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: '#007BFF',
    borderWidth: 2,
    borderColor: '#0056b3',
    borderRadius: 10,
  },
});

export default App;