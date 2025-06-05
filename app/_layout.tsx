import { AuthProvider } from "@/lib/auth-context";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen 
              name="auth" 
              options={{ 
                headerTitle: "Access Your Account",
                headerTitleAlign: "center",
              }} 
            />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
  );
}