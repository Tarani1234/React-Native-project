import Mybutton from "@/Components/Mybutton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Image, TextInput, ScrollView } from "react-native";

function Login() {
  const router = useRouter();

  // States for name, email and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    router.navigate("/Signup");
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
        <View style={{ padding: 20, gap: 20 }}>
          <TextInput
            placeholder="Enter your Name"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          />
          <Mybutton title="Login" onPress={onLogin} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
