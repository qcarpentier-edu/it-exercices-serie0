import { View  } from "react-native";
import WelcomeMessage from "./WelcomeMessage";
import Counter from "./Counter";
import LoginStatus from "./LoginStatus";

export default function Index() {
  return (
    <View>
      <WelcomeMessage name="Quentin" />
      <LoginStatus />
      <Counter />
    </View>
  );
}