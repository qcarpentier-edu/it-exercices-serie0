import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginStatus = () => {
  // État local pour suivre l'état de connexion
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction pour changer l'état de connexion
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {isLoggedIn ? "Heureux de te revoir !" : "Vous n’êtes pas connecté."}
      </Text>
      <Button title={isLoggedIn ? "Se déconnecter" : "Se connecter"} onPress={toggleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default LoginStatus;