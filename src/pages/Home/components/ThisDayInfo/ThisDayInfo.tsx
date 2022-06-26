import React from 'react';
import DailyDetailsGrid from '../../../../shared/DailyDetailsGrid/DailyDetailsGrid';

import s from './ThisDayInfo.module.scss';

import temp from '../../../../assets/icons/temp.svg?url';
import pressure from '../../../../assets/icons/pressure.svg?url';
import precipitation from '../../../../assets/icons/precipitation.svg?url';
import wind from '../../../../assets/icons/wind.svg?url';

type Props = {};

const ThisDayInfo = (props: Props) => {
  const items = [
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
      icon_url: precipitation,
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
    <div className={s.this_day_info}>
      <DailyDetailsGrid rows={items} />
    </div>
  );
};

export default ThisDayInfo;
