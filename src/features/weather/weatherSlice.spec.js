/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import weatherReducer, {
    fetchWeather,
  } from './weatherSlice.js';

  describe('weather reducer', () => {
    const initialState = {
      weather: {},
      status: 'idle',
      error: null,
    };
    it('should handle initial state', () => {
      expect(weatherReducer(undefined, { type: 'unknown' })).toEqual({
        weather: {},
        status: 'idle',
        error: null,
      });
    });
  
    it('should handle fetchWeather.pending', () => {
      const action = { type: fetchWeather.pending.type };
      const state = weatherReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        status: 'loading',
      });
    });
  
    it('should handle fetchWeather.fulfilled', () => {
      const mockWeatherData = { location: 'London', temperature: 20 };
      const action = { type: fetchWeather.fulfilled.type, payload: mockWeatherData };
      const state = weatherReducer(initialState, action);
      console.log(state);
      expect(state).toEqual({
        ...initialState,
        status: 'succeeded',
        weather: mockWeatherData,
      });
    });

  });