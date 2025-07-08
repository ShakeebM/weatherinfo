import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { selectedCitySelector, weatherSelector } from "../redux/selectors";
import { City, WeatherData } from "../redux/types";
import React from "react";
import { AppDispatch } from "../redux/store";
import { fetchWeatherData, selectCity } from "../redux/weatherSlice";
import WeatherComponent from "../components/weatherComponent";
import ShTextField from "../components/ShTextField";

const HomeScreen = () => {
   const weatherReport : WeatherData = useSelector(weatherSelector)
   
   const dispatch = useDispatch<AppDispatch>();

   const city = useSelector(selectedCitySelector);

  const onCitySelect = (city: City) => {
    dispatch(selectCity(city));
  };

  React.useEffect(() => {
    console.log('Selected city:', city);
    if (city) {
      dispatch(fetchWeatherData(city));
    }
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.innerContainer}>
      <ShTextField  onCitySelect={onCitySelect} />
      {weatherReport && city && (
        <WeatherComponent weatherData={weatherReport} city={city} />
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flex : 1,
    paddingTop : 10,
    alignItems: 'center',
  },

});


export default HomeScreen;