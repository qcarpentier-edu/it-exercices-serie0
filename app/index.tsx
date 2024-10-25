import { Text, View, StyleSheet } from "react-native";
import WelcomeMessage from "./components/WelcomeMessage";
import Counter from "./Counter";

export default function Index() {
  return (
    <View>
      <WelcomeMessage name="Quentin" />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
