import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginPage: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", username, password);
  };

  const handleCreateAccount = () => {
    console.log("Creating new account");
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#b3b3b3"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#b3b3b3"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.row}>
          <TouchableOpacity onPress={() => console.log("Forgot Password")}> 
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
          <Text style={styles.buttonText}>Create New Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    transform: [{ translateX: "50%" }],
    height: "100%",
    flex: 1,
    backgroundColor: "#000000", // Netflix black background
    padding: 16,
    justifyContent: "center",
  },
  container1: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#000000", // Netflix black background
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e50914", // Netflix red for the title
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    height: 50,
    backgroundColor: "#333333", // Dark gray for input background
    borderRadius: 5,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#444444",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  link: {
    color: "#e50914", // Netflix red for links
    fontSize: 14,
    textDecorationLine: "underline",
  },
  loginButton: {
    color: "#ffffff",
    backgroundColor: "#e50914", // Netflix red for login button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#444444",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#333333", // Dark gray for other buttons
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LoginPage;
