import React from 'react';
import DailyDetailsGrid, { Row } from '../../../../shared/DailyDetailsGrid/DailyDetailsGrid';

import s from './ThisDayInfo.module.scss';

import temp from '../../../../assets/icons/temp.svg?url';
import pressure from '../../../../assets/icons/pressure.svg?url';
import humidity from '../../../../assets/icons/humidity.svg?url';
import wind from '../../../../assets/icons/wind.svg?url';
import { OnecallWeatherCurrent } from '../../../../store/types';
import { toTemperatureFormat } from '../../../../shared/utils';

type Props = {
  weather: OnecallWeatherCurrent;
};

//TODO: try to move items template into one file and use it in many components

const ThisDayInfo = ({ weather }: Props) => {
  const items: Row[] = [
    {
      icon_url: temp,
      name: 'Temperature',
      value: `${ toTemperatureFormat(weather.temp)} - feels like ${toTemperatureFormat(weather.feels_like)}`,
    },
    {
      icon_url: pressure,
      name: 'Pressure',
      value: `${Math.round(weather.pressure / 1.333)} mm of mercury column - normal`,
    },
    {
      icon_url: humidity,
      name: 'Humidity',
      value: `${weather.humidity}%`,
    },
    {
      icon_url: wind,
      name: 'Wind',
      value: `${weather.wind_speed} м/с ${weather.wind_deg} юго-запад, Порывы ${weather.wind_gust} м/с`,
    },
  ];

  return (
    <div className={s.this_day_info}>
      <DailyDetailsGrid rows={items} />
    </div>
  );
};

export default ThisDayInfo;
