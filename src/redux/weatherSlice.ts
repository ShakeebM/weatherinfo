import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherService } from "../services/weatherService";
import { City, WeatherData, WeatherState } from "./types";



export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city : City, { rejectWithValue }) => {
    try {
      const data : WeatherData = await weatherService.getWeatherByCity(city.lat, city.lon);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState : WeatherState = {
    selectedCity: null,
    report: null,
};

// Slice for selected city's weather report
export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        selectCity: (state, action) => {
            console.log('Selected city:@@', action.payload);
            state.selectedCity = action.payload;
        },
        setWeatherReport: (state, action) => {
            state.report = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.report = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                console.error('Failed to fetch weather data:', action.payload);
            })
    },
});

export const { selectCity } = weatherSlice.actions;