import Mybutton from "@/Components/Mybutton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Image, TextInput, ScrollView, Text, Alert } from "react-native";

function Login() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", password: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const onLogin = () => {
    if (validate()) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      router.navigate("/Signup");
    } else {
      Alert.alert("Validation Error", "Please fill in all required fields.");
    }
  };

  return (
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
            placeholder="Enter your Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (text) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
              borderColor: errors.name ? "red" : "#ccc",
            }}
          />
          {errors.name ? <Text style={{ color: "red" }}>{errors.name}</Text> : null}

          <TextInput
            placeholder="Enter your Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (text) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
              borderColor: errors.email ? "red" : "#ccc",
            }}
          />
          {errors.email ? <Text style={{ color: "red" }}>{errors.email}</Text> : null}

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
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
              borderColor: errors.password ? "red" : "#ccc",
            }}
          />
          {errors.password ? <Text style={{ color: "red" }}>{errors.password}</Text> : null}

          <Mybutton title="Login" onPress={onLogin} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
