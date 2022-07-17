import React from 'react';

import s from './ThisDay.module.scss';
import SunIcon from '../../../../assets/icons/sun.svg';
import { OnecallWeatherCurrent } from '../../../../store/types';
import { capitalizeFirstLetter, getFormattedTime, toTemperatureFormat } from '../../../../shared/utils';
import { useCity } from '../../../../hooks/useCity';

type Props = {
  weather: OnecallWeatherCurrent;
};

const ThisDay = ({ weather }: Props) => {

  const currentCity = useCity();

  const temp = toTemperatureFormat(weather.temp);
  const time = getFormattedTime(weather.dt * 1000);

  return (
    <div className={s.this_day}>
      <div className={s.this_day__inner}>
        <div className={s.top_block}>
          <div className={s.top_block__wrapper}>
            <div className={s.this_tempr}>{temp}</div>
            <div className={s.this_day__name}>Today</div>
          </div>
          {/* <SunIcon className={s.weather_icon} /> */}
          <img className={s.weather_icon} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
        </div>
        <div className={s.bottom_block}>
          <div className={s.this_time}>
            Time: <span>{time}</span>
          </div>
          <div className={s.this_city}>
            City: <span>{capitalizeFirstLetter(currentCity.city.name)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
