import { Stack } from "expo-router";

export default function RootLayout() {
  return (
     <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen name="index"/>
         <Stack.Screen name="Login"/>
          <Stack.Screen name="Signup"/>
          <Stack.Screen name="TaskManager"/>
     </Stack>
  )
}

