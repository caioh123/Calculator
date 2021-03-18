import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import UserContext from "../src/context/UserContext";

const InputBar = () => {
  const { val } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{val}</Text>
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
  text: {
    fontSize: 20,
    marginRight: 10,
    color: "#000",
  },
});

export default InputBar;
