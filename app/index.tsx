import { Text, View } from "react-native";
import LoginPage from "./loginPage";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginPage/>
    </View>
  );
}
