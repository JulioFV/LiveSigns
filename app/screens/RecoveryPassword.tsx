import React from "react";
import {  View, Modal,Image,ActivityIndicator,Text,Alert,TextInput,StyleSheet,SafeAreaView,TouchableOpacity,} from "react-native";
import { db } from "../../firebaseConfig";
import {  collection,  query,  where,  getDocs,  updateDoc,} from "firebase/firestore";
import { NavigationProp } from "@react-navigation/native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

const App = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [email, setEmail] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);

  const generatePasswordResetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Éxito",
        "Se ha enviado un correo para restablecer la contraseña."
      );
    } catch (error: any) {
      console.error("Error al enviar el correo de restablecimiento:", error);
      Alert.alert(
        "Error",
        "No se pudo enviar el correo de restablecimiento. Inténtalo más tarde."
      );
    }
  };

  const handleRecoveryPassword = async () => {
    setLoading(true);

    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      Alert.alert("Error", "El correo electrónico no es válido");
      return;
    } else if (!email) {
      Alert.alert("Error", "El campo de correo electrónico es obligatorio");
      return;
    }

    try {
      const normalizedEmail = email.trim().toLowerCase();
      const q = query(
        collection(db, "usuarios"),
        where("correo", "==", normalizedEmail)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert("Error", "Usuario no encontrado");
        return;
      }

      // Si se encontró el usuario, actualiza la fecha del último reset (opcional)
      const userDoc = querySnapshot.docs[0];
      await updateDoc(userDoc.ref, {
        lastPasswordReset: new Date(),
      });

      await generatePasswordResetEmail();
    } catch (error: any) {
      console.error("Error al recuperar la contraseña:", error);
      Alert.alert(
        "Error",
        "No se pudo recuperar la contraseña. Inténtalo más tarde."
      );
    } finally{
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleRecoveryPassword}>
        <Text style={styles.buttonText}>Enviar Correo</Text>
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

    </SafeAreaView>
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
  logo: {
    width: 250,
    height: 110,
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
