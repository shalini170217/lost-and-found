import { AuthProvider } from "@/lib/auth-context";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      // Use setTimeout to ensure navigation happens after mount
      const timer = setTimeout(() => {
        router.replace("/auth");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isAuth, router]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
    </AuthProvider>
  );
}