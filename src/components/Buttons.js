import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import UserContext from "../context/UserContext";

const Buttons = ({ value, bgColor, font }) => {
  const { val, setVal } = useContext(UserContext);

  return (
    <TouchableOpacity
      onPress={() => {
        if (val) {
          return setVal(`${val}${value}`);
        }
        return setVal(value);
      }}
      style={[styles.btn, { backgroundColor: bgColor }]}
    >
      <Text style={{ fontSize: 20, color: font }}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Buttons;
