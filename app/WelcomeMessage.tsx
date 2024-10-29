import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Hello, {name}!</Text>
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

export default WelcomeMessage;