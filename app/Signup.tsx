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
} from "react-native";

function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = () => {
    console.log("Signup Email:", email);
    console.log("Signup Password:", password);
    router.navigate("/Login");
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
          <View style={{ padding: 20, gap: 20 }}>
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
            <Mybutton title="Sign Up" onPress={onSignup} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Signup;
