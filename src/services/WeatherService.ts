import axios, { AxiosResponse } from 'axios';
import { Weather } from '../store/types';

const API_KEY = '93d4955b45af38ec07a46b948bf0a422';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  }
}
