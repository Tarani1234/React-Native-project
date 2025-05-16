import Mybutton from "@/Components/Mybutton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
} from "react-native";

function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Password length check
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const onSignup = () => {
    if (validate()) {
      console.log("Signup Email:", email);
      console.log("Signup Password:", password);
      router.navigate("/TaskManager");
    } else {
      Alert.alert("Validation Error", "Please fix the highlighted fields.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require("@/assets/images/logo.webp")}
            style={{ width: "100%", height: 400, resizeMode: "contain" }}
          />
          <View style={{ padding: 20, gap: 10 }}>
            <TextInput
              placeholder="Enter your Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (text) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              style={{
                borderWidth: 1,
                borderColor: errors.email ? "red" : "#ccc",
                height: 50,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            />
            {errors.email ? (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            ) : null}

            <TextInput
              placeholder="Enter your Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (text) setErrors((prev) => ({ ...prev, password: "" }));
              }}
              style={{
                borderWidth: 1,
                borderColor: errors.password ? "red" : "#ccc",
                height: 50,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            />
            {errors.password ? (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            ) : null}

            <Mybutton title="Sign Up" onPress={onSignup} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Signup;
