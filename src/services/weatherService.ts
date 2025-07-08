import { WeatherData } from "../redux/types";
import { API_KEY, WEATHER_URL } from "../utils/constant";


class WeatherService {
  async getWeatherByCity(lat: number, lon: number) : Promise<WeatherData> {
    try {
      const response = await fetch(
        `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(`Weather data not found for ${lat}, ${lon}`);
      }
      
      const data : WeatherData = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch weather data');
    }
  }

  getWeatherIconUrl(iconCode: any) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}

export const weatherService = new WeatherService();
