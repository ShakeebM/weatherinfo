import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cityService } from "../services/cityService";
import { CitiesState, City } from "./types";
import { selectCity } from "./weatherSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

const initialState : CitiesState = {
    list : [],
    loading: false,
    history: [],
};

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (cityName : string, { rejectWithValue }) => {
    try {
      const data = await cityService.getCityByName(cityName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCityByCoordinates = createAsyncThunk(
  'cities/fetchCityByCoordinates',
  async ({ lat, lon } : { lat: number, lon: number }, { rejectWithValue }) => {
    try {
      const data = await cityService.getCityByCoordinates(lat, lon);
      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for cities list
export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        setCities: (state, action) => {
            state.list = action.payload;
        },
        addToHistory: (state, action) => {
            const city : City = action.payload;
            if (!state.history.some(item => item.name === city.name) && !state.history.some(item => item.country === city.country)) {
                state.history.push(city);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                console.error('Failed to fetch cities:', action.payload);
                state.loading = false;
            })
            .addCase(fetchCityByCoordinates.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCityByCoordinates.fulfilled, (state, action) => {
                const city : City = action.payload;
                if (!state.history.some(item => item.name === city.name) && !state.history.some(item => item.country === city.country)) {
                    state.history.push(city);
                }
                //change the selected city in weatherSlice
                const dispatch : AppDispatch = useDispatch();
                dispatch(selectCity(city));
                state.loading = false;
            })
            .addCase(fetchCityByCoordinates.rejected, (state, action) => {
                console.error('Failed to fetch city by coordinates:', action.payload);
                state.loading = false;
            });
    },
});