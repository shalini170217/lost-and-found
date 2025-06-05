import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View, ScrollView } from "react-native";
import { Button, Text, TextInput, useTheme, Snackbar } from "react-native-paper";
import { Image } from "react-native";
export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const theme = useTheme();
  const router = useRouter();

  const { signIn, signUp } = useAuth();

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true); 
  };

  const handleAuth = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      showSnackbar("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Passwords must be at least 6 characters long.");
      showSnackbar("Passwords must be at least 6 characters long.");
      return;
    }

    setError(null);

    try {
      if (isSignUp) {
        const error = await signUp(email, password);
        if (error) {
          setError(error);
          showSnackbar(error);
          return;
        }
        showSnackbar("Account created successfully!");
      } else {
        const error = await signIn(email, password);
        if (error) {
          setError(error);
          showSnackbar(error);
          return;
        }
        showSnackbar("Logged in successfully!");
        router.replace("/");
      }
    } catch (err) {
      showSnackbar("An unexpected error occurred");
    }
  };

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Snackbar at the TOP of the screen */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: 'Dismiss',
          onPress: () => setSnackbarVisible(false),
        }}
        style={{ 
          backgroundColor: theme.colors.primary,
          marginTop: Platform.OS === 'ios' ? 40 : 20,
        }}
        wrapperStyle={{
          top: 0,
          zIndex: 100,
        }}
      >
        <Text style={{ color: theme.colors.onPrimary }}>{snackbarMessage}</Text>
      </Snackbar>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <View style={styles.containerr}>
      <Image
        source={require('../assets/images/plogo.png')}
        style={styles.logo}
      />
    </View>

            <Text style={styles.title} variant="headlineMedium">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </Text>

            <TextInput
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="example@gmail.com"
              mode="outlined"
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            />

            <TextInput
              label="Password"
              autoCapitalize="none"
              mode="outlined"
              secureTextEntry
              style={styles.input}
              onChangeText={setPassword}
              value={password}
            />

            {error && <Text style={{ color: theme.colors.error, marginBottom: 16 }}>{error}</Text>}

            <Button 
              mode="contained" 
              style={styles.button} 
              onPress={handleAuth}
              labelStyle={styles.buttonLabel}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            <Button
              mode="text"
              onPress={handleSwitchMode}
              style={styles.switchModeButton}
              labelStyle={styles.switchModeButtonLabel}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  containerr: {
    flex: 1, // Take full height of screen
    justifyContent: 'center', // Vertical center
    alignItems: 'center',     // Horizontal center
  },
  logo: {
    width: 150,
    height: 150,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  button: {
    color: '#ff79c6',
    marginTop: 8,
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
  switchModeButton: {
    marginTop: 16,
    
  },
  switchModeButtonLabel: {
    fontSize: 14,
  },
});