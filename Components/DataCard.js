import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DataCard = ({ name, data }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{data}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 20,
    borderColor: "grey"
  },
  text: {
    color: "black",
    fontSize: 20
  }
});

export default DataCard;
