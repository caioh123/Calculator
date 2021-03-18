import React, { useState, useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Buttons from "../components/Buttons";

const ButtonPage = () => {
  return (
    <View style={styles.btnContainer}>
      <Buttons value="(" bgColor="grey" font="white" />
      <Buttons value=")" bgColor="grey" font="white" />
      <Buttons value="%" bgColor="grey" font="white" />
      <Buttons value="AC" bgColor="grey" font="white" />
      <Buttons value="7" bgColor="#fff" />
      <Buttons value="8" bgColor="#fff" />
      <Buttons value="9" bgColor="#fff" />
      <Buttons value="+" bgColor="grey" font="white" />
      <Buttons value="4" bgColor="#fff" />
      <Buttons value="5" bgColor="#fff" />
      <Buttons value="6" bgColor="#fff" />
      <Buttons value="*" bgColor="grey" font="white" />
      <Buttons value="1" bgColor="#fff" />
      <Buttons value="2" bgColor="#fff" />
      <Buttons value="3" bgColor="#fff" />
      <Buttons value="-" bgColor="grey" font="white" />
      <Buttons value="0" bgColor="#fff" />
      <Buttons value="." bgColor="#fff" />
      <Buttons value="=" bgColor="red" font="white" />
      <Buttons value="+" bgColor="grey" font="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    width: 300,
    backgroundColor: "#f9ccac",
    flexWrap: "wrap",
    borderWidth: 1,
  },
});

export default ButtonPage;
