// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { useAuth } from "@/lib/auth-context";
import { Button } from "react-native-paper";

export default function TabsLayout() {
  const { signOut } = useAuth();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Button mode="text" onPress={signOut} icon="logout" compact>
              Sign Out
            </Button>
          ),
        }}
      />
      <Tabs.Screen name="leaderboard" options={{ title: "Leaderboard" }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}
