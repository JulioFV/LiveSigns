import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Perfil from './Perfil';

const App = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View style={styles.container}>
      {/* Contenido principal de la aplicación */}
      <View style={styles.content}>
        <Text>.</Text>
      </View>

      {/* Barra de navegación inferior */}
      <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={require('../../assets/images/Imagenes/interprete.png')} style={styles.largeIcon} />
      </View>
      <Text style={styles.title}>INTERPRETE</Text>
      <View style={styles.icons}>
        <View style={styles.iconItem}>
          <Image source={require('../../assets/images/Imagenes/explora.png')} style={styles.smallIcon} />
          <Text>Explora</Text>
        </View>
        <View style={styles.iconItem}>
          <Image source={require('../../assets/images/Imagenes/diccionario.png')} style={styles.smallIcon} />
          <Text>Diccionario</Text>
        </View>
        <View style={styles.iconItem}>
          <Image source={require('../../assets/images/Imagenes/juegos.png')} style={styles.smallIcon} />
          <Text>Juegos</Text>
        </View>
        <View style={styles.iconItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image source={require('../../assets/images/Imagenes/perfil.png')} style={styles.smallIcon} />
          <Text>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 20,
    width: '100%',
    height: '80%',
    position: 'relative',
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 480, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  largeIcon: {
    width: '80%',
    height: '80%',
  },
  title: {
    marginTop: 60, 
    fontSize: 24,
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