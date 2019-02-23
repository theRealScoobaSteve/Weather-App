import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  state = {
    cityText: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>
        <View style={styles.searchRow}>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Search for a zipcode"
              style={styles.input}
              onChangeText={cityText => this.setState({ cityText })}
              value={this.state.cityText}
            />
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 100,
    padding: 10,
    height: 40,
    width: "100%"
  },
  searchRow: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20
  },
  buttonRow: {
    flex: 1
  },
  inputRow: {
    flex: 4,
    marginRight: 5
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  title: {
    marginBottom: 40,
    fontSize: 36
  }
});
