import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { OnecallWeatherDaily } from '../../../../store/types';
import DailyDetailsGrid, { Row } from '../../../../shared/DailyDetailsGrid/DailyDetailsGrid';
import { Dialog } from '../../../../shared/Dialog/Dialog';

import s from './DailyWeatherModal.module.scss';

import temperature from '../../../../assets/icons/temp.svg?url';
import pressure from '../../../../assets/icons/pressure.svg?url';
import humidity from '../../../../assets/icons/humidity.svg?url';
import wind from '../../../../assets/icons/wind.svg?url';

import smallRainSun from '../../../../assets/icons/small_rain_sun.svg?url';
import { capitalizeFirstLetter, getFormattedTime, toTemperatureFormat } from '../../../../shared/utils';
import { useCity } from '../../../../hooks/useCity';

type Props = {};

type LocationState = {
  weatherForDay?: OnecallWeatherDaily;
};

export const DailyWeatherModal = (props: Props) => {
  const location = useLocation();
  const { weatherForDay } = location.state as LocationState;
  const navigate = useNavigate();

  const onDismiss = () => {
    navigate(-1);
  };

  const currentCity = useCity();

  const items: Row[] = [
    {
      icon_url: temperature,
      name: 'Temperature',
      value: `${toTemperatureFormat(weatherForDay.temp.day)} - feels like ${toTemperatureFormat(weatherForDay.feels_like.day)}`,
    },
    {
      icon_url: pressure,
      name: 'Pressure',
      value: `${Math.round(weatherForDay.pressure / 1.333)} mm of mercury column - normal`,
    },
    {
      icon_url: humidity,
      name: 'Humidity',
      value: `${weatherForDay.humidity}%`,
    },
    {
      icon_url: wind,
      name: 'Wind',
      value: `${weatherForDay.wind_speed} м/с ${weatherForDay.wind_deg} юго-запад, Порывы ${weatherForDay.wind_gust} м/с`,
    },
  ];

  const date = new Date(weatherForDay.dt * 1000);
  const LOCALE = process.env.REACT_APP_LOCALE;

  const weekDayName = date.toLocaleString(LOCALE, { weekday: 'long' });
  const temp = toTemperatureFormat(weatherForDay.temp.day);
  const time = getFormattedTime(weatherForDay.dt * 1000);

  return (
    <Dialog onDismiss={onDismiss}>
      <div className={s.day}>
        <div className={s.day__temp}>{temp}</div>
        <div className={s.day__name}>{weekDayName}</div>
        <div className={s.icon}>
          <img src={smallRainSun} alt="weather icon" />
        </div>
        <div className={s.time}>
          Time: <span>{time}</span>
        </div>
        <div className={s.city}>
          City: <span>{capitalizeFirstLetter(currentCity.currCity.name)}</span>
        </div>
      </div>
      <DailyDetailsGrid rows={items} />
    </Dialog>
  );
};
