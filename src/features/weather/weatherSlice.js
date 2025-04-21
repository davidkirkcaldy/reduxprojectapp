/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getWeather from './weatherAPI.js';

const initialState = {
  weather: {},
  status: 'idle',
  error: null,
};
const useMockWeather = false;

export const fetchWeather = createAsyncThunk(
  'weather/getWeather',
  async () => {

    if(!useMockWeather) {
    const response = await getWeather();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    const weather = {
       temperature: Math.round(json.main.temp - 273.15),
        location: json.name,
        description: json.weather[0].description,
        humidity: json.main.humidity,
        windSpeed: json.wind.speed,
        windDirection: json.wind.deg,
        icon: json.weather[0].icon,
        iconUrl: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
        lat: json.coord.lat,
        lon: json.coord.lon,
        sunrise: new Date(json.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(json.sys.sunset * 1000).toLocaleTimeString(),
        pressure: json.main.pressure,
        visibility: json.visibility,
    }
    return weather;
  }
  else {
    // Mock data for testing
  
    const mockWeather = {
      temperature: 20,
       location: 'London',
       description: 'Clear sky',
       humidity: 50,
       windSpeed: 5,
       windDirection: 180,
       icon: '01d',
       iconUrl: 'https://openweathermap.org/img/wn/01d@2x.png',
        lat: 51.5074,
        lon: -0.1278,
        sunrise: '06:00 AM',
        sunset: '08:00 PM',
        pressure: 1012,
        visibility: 10000,
   };

    return mockWeather;
  }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearWeather: (state) => {
      state.weather = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearWeather } = weatherSlice.actions;
export const selectWeather = (state) => state.weather.weather;

export default weatherSlice.reducer;
