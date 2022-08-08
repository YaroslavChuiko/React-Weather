import React from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter, toTemperatureFormat } from '../../../../shared/utils';
import { OnecallWeatherDaily } from '../../../../store/types';

import s from './Days.module.scss';

type Props = {
  day: OnecallWeatherDaily;
  dayName: string;
};

const Card = ({ day, dayName }: Props) => {
  const navigate = useNavigate();

  const LOCALE = process.env.REACT_APP_LOCALE;
  const date = new Date(day.dt * 1000);
  const weekDay = dayName ? dayName : date.toLocaleString(LOCALE, { weekday: 'short' });
  const monthDay = date.toLocaleString(LOCALE, { day: '2-digit', month: 'short' });
  const tempMax = toTemperatureFormat(day.temp.max, true);
  const tempMin = toTemperatureFormat(day.temp.min, true);
  const description = capitalizeFirstLetter(day.weather[0].description);

  return (
    <div
      className={s.card}
      onClick={() => {
        navigate('dialog/' + day.dt, { state: { weatherForDay: day } });
      }}
    >
      <div className={s.day_name}>{weekDay}</div>
      <div className={s.day_info}>{monthDay}</div>
      <div className={s.icon}>
        {/* <img src={icon_url} alt="icon" /> */}
        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather icon" />
      </div>
      <div className={s.temp_day}>{tempMax}</div>
      <div className={s.temp_night}>{tempMin}</div>
      <div className={s.info}>{description}</div>
    </div>
  );
};

export default Card;
