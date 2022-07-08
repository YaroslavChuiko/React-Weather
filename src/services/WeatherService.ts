import axios, { AxiosResponse } from 'axios';
import api from '../axios';
import { OnecallWeather } from '../store/types';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<OnecallWeather>> {
    // return api.get<Weather>(`/weather?q=${city}`);
    return api.get<OnecallWeather>(`/onecall?${city}`);
  }
}
