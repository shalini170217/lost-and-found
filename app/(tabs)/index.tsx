import { useAuth } from "@/lib/auth-context";
import { StyleSheet, View ,Text} from "react-native";
import { Button } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.view}>
     
    </View>
  );
}

export default function App() {
  const { signOut } = useAuth();

  
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); 