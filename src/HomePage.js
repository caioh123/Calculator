import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputBar from "./InputBar";
import ButtonPage from "./components/ButtonPage";
import UserContext from "./context/UserContext";

const Homepage = () => {
  const [val, setVal] = useState("");

  return (
    <>
      <UserContext.Provider value={{ val, setVal }}>
        <View style={styles.container}>
          <InputBar />
          <ButtonPage />
        </View>
      </UserContext.Provider>
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
