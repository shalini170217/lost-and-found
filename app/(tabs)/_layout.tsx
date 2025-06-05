import { Tabs } from "expo-router";
import { useAuth } from "@/lib/auth-context";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function TabsLayout() {
  const { signOut } = useAuth();
  const router = useRouter();

  const HeaderRight = () => (
    <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
      {/* Profile icon button */}
      <TouchableOpacity onPress={() => router.push("/user-profile")} style={{ marginRight: 15 }}>
        <MaterialIcons name="account-circle" size={24} color="#1E1E1E" />
      </TouchableOpacity>

      {/* Sign out button */}
      <TouchableOpacity
        onPress={signOut}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <MaterialIcons name="logout" size={20} color="#1E1E1E" />
        <Text style={{ color: "#1E1E1E", marginLeft: 4, fontSize: 16 }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Lost",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="help-outline" size={size} color={color} />
          ),
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="emoji-events" size={size} color={color} />
          ),
          headerRight: HeaderRight,
        }}
      />
      <Tabs.Screen
        name="found"
        options={{
          title: "Found",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="beenhere" size={size} color={color} />
          ),
          headerRight: HeaderRight,
        }}
      />
    </Tabs>
  );
}
