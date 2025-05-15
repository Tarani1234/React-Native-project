import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type MyButtonProps = {
  title: string;
  onPress: () => void;
};

const Mybutton = ({ title, onPress } : MyButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
         {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    alignItems : "center",
    paddingHorizontal : 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text : { fontSize: 16, color: "white", fontWeight: "700" }
});

export default Mybutton;
