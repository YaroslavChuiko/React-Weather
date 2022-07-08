import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { OnecallWeather } from '../types';

type OnecallWeatherState = {
  weather: OnecallWeather;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: OnecallWeatherState = {
  weather: {
    timezone: '',
    current: {
      dt: 0, //sec
      temp: 0,
      feels_like: 0,
      pressure: 0, //hPa
      humidity: 0, //%
      wind_speed: 0,
      wind_deg: 0,
      wind_gust: 0, //??
      weather: [
        {
          main: '', //??Group of weather parameters (Rain, Snow, Extreme etc.)
          icon: '01d',
        },
      ],
    },
    daily: [
      {
        dt: 0, //sec
        temp: {
          day: 0,
          min: 0,
          max: 0,
        },
        feels_like: {
          day: 0,
          night: 0,
        },
        pressure: 0, //hPa
        humidity: 0, //%
        wind_speed: 0,
        wind_deg: 0,
        wind_gust: 0,
        weather: [
          {
            main: '',
            description: '',
            icon: '01d',
          },
        ],
        pop: 0,
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const onecallWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchOnecallWeather(state) {
      state.isLoading = true;
    },
    fetchOnecallWeatherSuccess(state, action: PayloadAction<AxiosResponse<OnecallWeather>>) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchOnecallWeatherError(state, action: PayloadAction<AxiosResponse<OnecallWeather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default onecallWeatherSlice.reducer;
