import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Buttons from "./components/Buttons";
import InputBar from "./InputBar";

const Homepage = () => {
  return (
    <>
      <View style={styles.container}>
        <InputBar />
        <View style={styles.btnContainer}>
          <Buttons text="(" bgColor="grey" font="white" />
          <Buttons text=")" bgColor="grey" font="white" />
          <Buttons text="%" bgColor="grey" font="white" />
          <Buttons text="AC" bgColor="grey" font="white" />
          <Buttons text="7" bgColor="#fff" />
          <Buttons text="8" bgColor="#fff" />
          <Buttons text="9" bgColor="#fff" />
          <Buttons text="+" bgColor="grey" font="white" />
          <Buttons text="4" bgColor="#fff" />
          <Buttons text="5" bgColor="#fff" />
          <Buttons text="6" bgColor="#fff" />
          <Buttons text="*" bgColor="grey" font="white" />
          <Buttons text="1" bgColor="#fff" />
          <Buttons text="2" bgColor="#fff" />
          <Buttons text="3" bgColor="#fff" />
          <Buttons text="-" bgColor="grey" font="white" />
          <Buttons text="0" bgColor="#fff" />
          <Buttons text="." bgColor="#fff" />
          <Buttons text="=" bgColor="red" font="white" />
          <Buttons text="+" bgColor="grey" font="white" />
        </View>
      </View>
      <View />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 600,
    width: 350,
    borderWidth: 1,
    backgroundColor: "#f9ccac",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,

    elevation: 8,
  },
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

export default Homepage;
