import { WeatherService } from '../../services/WeatherService';
import { onecallWeatherSlice } from '../slices/currentWeatherSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(onecallWeatherSlice.actions.fetchOnecallWeather());
    const res = await WeatherService.getCurrentWeather(payload);

    if (res.status === 200) {
      dispatch(onecallWeatherSlice.actions.fetchOnecallWeatherSuccess(res));
    }
    dispatch(onecallWeatherSlice.actions.fetchOnecallWeatherError(res));
  } catch (error) {
    console.log(error);
  }
};
