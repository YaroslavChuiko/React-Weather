import React from 'react';
import { OnecallWeatherDaily } from '../../../../store/types';

import s from './Days.module.scss';

type Props = {
  day: OnecallWeatherDaily;
  dayName: string;
};

const Card = ({ day, dayName }: Props) => {
  const date = new Date(day.dt * 1000);
  
  const weekDay = dayName ? dayName : date.toLocaleString('en-US', { weekday: 'short' });
  const monthDay = date.toLocaleString('en-US', { day: '2-digit', month: 'short' });
  const tempMax = Math.round(day.temp.max);
  const tempMin = Math.round(day.temp.min);
  const description = day.weather[0].description ? day.weather[0].description[0].toUpperCase() + day.weather[0].description.slice(1) : ''; //capitalize

  return (
    <div className={s.card}>
      <div className={s.day_name}>{weekDay}</div>
      <div className={s.day_info}>{monthDay}</div>
      <div className={s.icon}>
        {/* <img src={icon_url} alt="icon" /> */}
        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather icon" />
      </div>
      <div className={s.temp_day}>{tempMax >= 0 ? `+${tempMax}` : `-${tempMax}`}°C</div>
      <div className={s.temp_night}>{tempMin >= 0 ? `+${tempMin}` : `-${tempMin}`}°C</div>
      <div className={s.info}>{description}</div>
    </div>
  );
};

export default Card;
