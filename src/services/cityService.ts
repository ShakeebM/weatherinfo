import { City } from "../redux/types";
import { API_KEY, GEO_URL, GEO_URL_BY_COORDINATES } from "../utils/constant";

class CityService {
    async getCityByName(cityName: string): Promise<City[]> {
        try {
            const response = await fetch(`${GEO_URL}?q=${cityName}&limit=5&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`City not found: ${cityName}`);
            }
            //it would be an array of cities, we will return the first one
            const data : City[] = await response.json();
            if (data.length === 0) {
                throw new Error(`City not found: ${cityName}`);
            }
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getCityByCoordinates(lat: number, lon: number): Promise<City> {
        try {
            const response = await fetch(`${GEO_URL_BY_COORDINATES}?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`);
        
            if (!response.ok) {
                throw new Error(`City not found for coordinates: ${lat}, ${lon}`);
            }
            const data = await response.json();
            if (data.length === 0) {
                throw new Error(`City not found for coordinates: ${lat}, ${lon}`);
            }
            return data;
        } catch (error) {
            console.error('Error fetching city by coordinates:', error);
            throw error;
        }
    }
};

export const cityService = new CityService()