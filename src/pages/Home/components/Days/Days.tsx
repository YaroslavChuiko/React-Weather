import React from 'react';
import Card from './Card';

import s from './Days.module.scss';

import rain from '../../../../assets/icons/rain.svg?url';
import sun from '../../../../assets/icons/sun.svg?url';
import mainlyCloudy from '../../../../assets/icons/mainly_cloudy.svg?url';
import smallRainSun from '../../../../assets/icons/small_rain_sun.svg?url';
import smallRain from '../../../../assets/icons/small_rain.svg?url';
import Tabs from './Tabs';

type Props = {};

export type Day = {
  day_name: string;
  day_info: string;
  icon_url: typeof rain;
  temp_day: string;
  temp_night: string;
  info: string;
};

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day_name: 'Сегодня',
      day_info: '28 авг',
      icon_url: sun,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Завтра',
      day_info: '29 авг',
      icon_url: smallRainSun,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь и солнце',
    },
    {
      day_name: 'Ср',
      day_info: '30 авг',
      icon_url: smallRain,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь',
    },
    {
      day_name: 'Чт',
      day_info: '28 авг',
      icon_url: mainlyCloudy,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Пт',
      day_info: '28 авг',
      icon_url: rain,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Сб',
      day_info: '28 авг',
      icon_url: sun,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_name: 'Вс',
      day_info: '28 авг',
      icon_url: sun,
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
  ];

  return (
    <>
      <Tabs />
      
      <div className={s.days}>
        {days.map((day: Day, index) => (
          <Card key={index} day={day} />
        ))}
      </div>
    </>
  );
};

export default Days;
