import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '883942609bd04e6ecf2a33c7ab270cbb';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });