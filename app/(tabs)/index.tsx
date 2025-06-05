import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LostPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Card for Create a Post */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/lost/create")}>
        <Text style={styles.cardTitle}>➕ Create a Post</Text>
        <Text style={styles.cardDesc}>Report an item you've lost with details and image.</Text>
      </TouchableOpacity>

      {/* Card for View All Posts */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/lost/view")}>
        <Text style={styles.cardTitle}>📂 View All Posts</Text>
        <Text style={styles.cardDesc}>Browse all lost items posted by others.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: "#666",
  },
});
