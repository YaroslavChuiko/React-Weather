import { RootState } from './store';

export const selectOnecallWeatherData = (state: RootState) => state.onecallWeatherSliceReducer;
