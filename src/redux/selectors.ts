import { City, WeatherData, CitiesState } from "./types";

export const weatherSelector = (state: any) => state.weather.report as WeatherData | null;

export const selectedCitySelector = (state: any) => state.weather.selectedCity as City | null;

export const citiesSelector = (state: any) => state.cities as CitiesState;

export const cityHistorySelector = (state: any) => state.cities.history as City[];

