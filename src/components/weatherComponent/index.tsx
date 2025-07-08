import { ActivityIndicator, Text, View } from "react-native";
import { Image } from 'expo-image';
import { weatherService } from "../../services/weatherService";
import styles from "./WeatherComponent.styles";
import { City, WeatherData } from "../../redux/types";

interface WeatherComponentProps {
  weatherData: WeatherData
  city: City
}

const WeatherComponent = ({ weatherData, city } : WeatherComponentProps) => {

  if (!weatherData) {
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>
          🌤️ Select a city to view weather information
        </Text>
      </View>
    );
  }

  const formatTime = (timestamp) => {
    let date = new Date(timestamp); // Convert from seconds to milliseconds
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.timestamp}>
          Updated: {formatTime(weatherData.dt)}
        </Text>
      </View>

      <View style={styles.mainWeather}>
        <Image
          source={{
            uri: weatherService.getWeatherIconUrl(weatherData.weather[0].icon),
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
        <Text style={styles.description}>
          {weatherData.weather[0].description.charAt(0).toUpperCase() + 
           weatherData.weather[0].description.slice(1)}
        </Text>
      </View>

      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Feels like</Text>
          <Text style={styles.detailValue}>{weatherData.main.feels_like}°C</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{weatherData.main.humidity}%</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Wind Speed</Text>
          <Text style={styles.detailValue}>{weatherData.wind.speed} m/s</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Pressure</Text>
          <Text style={styles.detailValue}>{weatherData.main.pressure} hPa</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Visibility</Text>
          <Text style={styles.detailValue}>{weatherData.visibility} km</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Sunrise</Text>
          <Text style={styles.detailValue}>{formatTime(weatherData.sys.sunrise)}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherComponent;
