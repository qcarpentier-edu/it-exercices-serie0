import React from 'react';
import { Text, View } from 'react-native';

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage = ({ name }: { name: string}) => {
  return (
    <View>
      <Text>Welcome, {name}!</Text>
    </View>
  );
};

export default WelcomeMessage;