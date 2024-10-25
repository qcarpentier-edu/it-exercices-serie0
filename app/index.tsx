import { Text, View, StyleSheet } from "react-native";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Index() {
  return (
    <View>
      <WelcomeMessage name="Quentin" />
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
