import React from 'react';

import s from './ThisDay.module.scss';
import SunIcon from '../../../../assets/icons/sun.svg';
import { OnecallWeatherCurrent } from '../../../../store/types';

type Props = {
  weather: OnecallWeatherCurrent;
};

function getFormattedTime(date: number) {
  let dateObject = new Date(date * 1000);

  let hours = String('0' + dateObject.getHours()).slice(-2);
  let minutes = String('0' + dateObject.getMinutes()).slice(-2);

  return `${hours}:${minutes}`;
}

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.this_day__inner}>
        <div className={s.top_block}>
          <div className={s.top_block__wrapper}>
            <div className={s.this_tempr}>{Math.round(weather.temp)}°</div>
            <div className={s.this_day__name}>Сегодня</div>
          </div>
          {/* <SunIcon className={s.weather_icon} /> */}
          <img className={s.weather_icon} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
        </div>
        <div className={s.bottom_block}>
          <div className={s.this_time}>
            Время: <span>{getFormattedTime(weather.dt)}</span>
          </div>
          <div className={s.this_city}>
            Город: <span>{weather.weather[0].main}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
