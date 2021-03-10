import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from "./TextInput";

const InputBar = () => {
  return (
    <View style={styles.container}>
      <TextInput text="1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: 70,
    width: 300,
    backgroundColor: "#e0876a",
    borderWidth: 1,
  },
});

export default InputBar;
