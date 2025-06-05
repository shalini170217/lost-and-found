import { Tabs } from "expo-router";
import { useAuth } from "@/lib/auth-context";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  const { signOut } = useAuth();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Lost",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="help-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={signOut}
              style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
            >
              <MaterialIcons name="logout" size={20} color="#1E1E1E" />
              <Text style={{ color: "#1E1E1E", marginLeft: 4, fontSize: 16 }}>
                Sign Out
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="emoji-events" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={signOut}
              style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
            >
              <MaterialIcons name="logout" size={20} color="#1E1E1E" />
              <Text style={{ color: "#1E1E1E", marginLeft: 4, fontSize: 16 }}>
                Sign Out
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="found"
        options={{
          title: "Found",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="beenhere" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={signOut}
              style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
            >
              <MaterialIcons name="logout" size={20} color="#1E1E1E" />
              <Text style={{ color: "#1E1E1E", marginLeft: 4, fontSize: 16 }}>
                Sign Out
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
