import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

import DataCard from "./Components/DataCard";

export default class App extends Component {
  state = {
    baseUrl:
      "https://api.apixu.com/v1/forecast.json?key=b7e89a216ee047d8aff30948192402&q=",
    cityText: null,
    data: {}
  };

  getWeatherData = async code => {
    try {
      const response = await fetch(`${this.state.baseUrl}${code}`);
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  handleQuery = async () => {
    this.getWeatherData(this.state.cityText);
    this.setState({ cityText: "" });
  };

  componentDidMount() {
    this.getWeatherData("92673");
  }

  render() {
    let mintemp = "...";
    let maxtemp = "...";
    let humid = "...";
    let windSpeed = "...";
    let currentTemp = "...";
    let location = "...";

    if (this.state.data.forecast) {
      const {
        maxtemp_f,
        mintemp_f,
        maxwind_mph
      } = this.state.data.forecast.forecastday[0].day;
      const { temp_f, humidity } = this.state.data.current;
      const { region, name } = this.state.data.location;

      location = `${name}, ${region}`;
      currentTemp = `${temp_f}°`;
      maxtemp = `${maxtemp_f}°`;
      mintemp = `${mintemp_f}°`;
      humid = `${humidity}%`;
      windSpeed = `${maxwind_mph} mph`;
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>Weather App</Text>
        </View>
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
            <TouchableOpacity style={styles.button} onPress={this.handleQuery}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.currentDisplay}>
          <Text style={styles.city}>{location}</Text>
          <Text style={styles.temperature}>{currentTemp}</Text>
        </View>
        <View style={styles.cardSection}>
          <DataCard name="Daily Minimum:" data={maxtemp} />
          <DataCard name="Daily Maximum:" data={mintemp} />
          <DataCard name="Humidity:" data={humid} />
          <DataCard name="Wind Speed:" data={windSpeed} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff"
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 100,
    padding: 10,
    height: 40,
    width: "100%"
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
  titleRow: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  searchRow: {
    flex: 1,
    flexDirection: "row"
  },
  titleText: {
    fontSize: 32
  },
  cardSection: {
    flex: 4
  },
  currentDisplay: {
    flex: 3,
    alignItems: "center"
  },
  city: {
    fontSize: 24,
    marginBottom: 25
  },
  temperature: {
    fontSize: 84
  }
});
