import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectOnecallWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

type Props = {
  city: string;
};

const Home = ({ city }: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectOnecallWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather(city));
  }, [city]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather.current} />
        <ThisDayInfo weather={weather.current} />
      </div>
      <Days days={weather.daily}/>
    </div>
  );
};

export default Home;
