import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from './weatherSlice';
import { citiesSlice } from './citiesSlice';

const store = configureStore({
    reducer: {
        cities : citiesSlice.reducer,
        weather: weatherSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;

export default store;