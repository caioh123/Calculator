import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TextInput = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginRight: 10,
    color: "#000",
  },
});

export default TextInput;
