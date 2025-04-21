/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import getApiKey from '../../utils/getApiKey.js';
const lat = 51.32111111; // Replace with your latitude
const lon = 0.23722222; // Replace with your longitude

const getWeather = async () => {
  const keyInfo = await getApiKey();
  const API_KEY = keyInfo['API_KEY'];
  if (!API_KEY) {
    throw new Error('API key not found');
  }

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  const response = await fetch(API_URL);
  return response;
};

export default getWeather;
