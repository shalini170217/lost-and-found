import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";

export default function UserProfile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 User Profile</Text>

      {/* Back button */}
      <Button 
        mode="outlined" 
        onPress={() => router.back()} 
        style={{ marginTop: 20 }}
      >
        Go Back
      </Button>

      {/* Example: Navigate to home */}
      <Button
        mode="contained"
        onPress={() => router.push("/")}
        style={{ marginTop: 10 }}
      >
        Go Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
