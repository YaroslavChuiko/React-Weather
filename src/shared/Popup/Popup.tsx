import React from 'react';
import DailyDetailsGrid from '../DailyDetailsGrid/DailyDetailsGrid';
import { Row } from '../DailyDetailsGrid/DailyDetailsGrid';

import s from './Popup.module.scss';

import CloseIcon from '../../assets/icons/close.svg';
import temp from '../../assets/icons/temp.svg?url';
import pressure from '../../assets/icons/pressure.svg?url';
import humidity from '../../assets/icons/humidity.svg?url';
import wind from '../../assets/icons/wind.svg?url';
import smallRainSun from '../../assets/icons/small_rain_sun.svg?url';


type Props = {};

export const Popup = (props: Props) => {
  const items: Row[] = [
    {
      icon_url: temp,
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_url: pressure,
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_url: humidity,
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_url: wind,
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];

  return (
    <div className={s.popup}>
      <div className={s.popup__dialog}>
        <button className={s.popup__close} type="button">
          <CloseIcon className={s.icon_close} />
        </button>
        
        <div className={s.day}>
          <div className={s.day__temp}>12°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.icon}>
            <img src={smallRainSun} alt="weather icon" />
          </div>
          <div className={s.time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.city}>
            Город: <span>Киев</span>
          </div>
        </div>
        <DailyDetailsGrid rows={items} />
      </div>
    </div>
  );
};
