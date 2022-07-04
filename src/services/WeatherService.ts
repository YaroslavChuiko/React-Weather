import axios, { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../store/types';

// const API_KEY = '93d4955b45af38ec07a46b948bf0a422';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}
