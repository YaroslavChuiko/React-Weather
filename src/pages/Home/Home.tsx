import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { useCity } from '../../hooks/useCity';
import Fade from '../../shared/Animations/Fade';
import Preloader from '../../shared/Preloader/Preloader';
import { selectOnecallWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss';

type Props = {};

const Home = (props: Props) => {
  const city = useCity();

  const dispatch = useCustomDispatch();
  const { weather, isLoading } = useCustomSelector(selectOnecallWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather(city.currCity.coords));
  }, [city]);

  return (
    <>
      <Fade inProp={isLoading} timeout={200}>
        <Preloader />
      </Fade>

      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather.current} />
          <ThisDayInfo weather={weather.current} />
        </div>
        <Days days={weather.daily} />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
