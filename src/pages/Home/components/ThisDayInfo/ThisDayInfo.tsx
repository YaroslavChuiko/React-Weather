import React from 'react';
import DailyDetailsGrid from '../../../../shared/DailyDetailsGrid/DailyDetailsGrid';

import s from './ThisDayInfo.module.scss';

import temp from '../../../../assets/icons/temp.svg?url';
import pressure from '../../../../assets/icons/pressure.svg?url';
import humidity from '../../../../assets/icons/humidity.svg?url';
import wind from '../../../../assets/icons/wind.svg?url';
import { Weather } from '../../../../store/types';

type Props = {
  weather: Weather;
};

const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_url: temp,
      name: 'Температура',
      value: `${Math.round(weather.main.temp)}° - ощущается как ${Math.round(weather.main.feels_like)}°`,
    },
    {
      icon_url: pressure,
      name: 'Давление',
      value: `${Math.round(weather.main.pressure / 1.333)} мм ртутного столба - нормальное`,
    },
    {
      icon_url: humidity,
      name: 'Влажность',
      value: `${weather.main.humidity}%`,
    },
    {
      icon_url: wind,
      name: 'Ветер',
      value: `${weather.wind.speed} м/с ${weather.wind.deg} юго-запад, Порывы ${weather.wind.gust} м/с`,
    },
  ];

  return (
    <div className={s.this_day_info}>
      <DailyDetailsGrid rows={items} />
    </div>
  );
};

export default ThisDayInfo;
