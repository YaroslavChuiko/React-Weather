import React, { useEffect, useState } from 'react';
import Card from './Card';

import s from './Days.module.scss';

import rain from '../../../../assets/icons/rain.svg?url';
import sun from '../../../../assets/icons/sun.svg?url';
import mainlyCloudy from '../../../../assets/icons/mainly_cloudy.svg?url';
import smallRainSun from '../../../../assets/icons/small_rain_sun.svg?url';
import smallRain from '../../../../assets/icons/small_rain.svg?url';
import Tabs from './Tabs';
import { OnecallWeatherDaily } from '../../../../store/types';

type Props = {
  days: OnecallWeatherDaily[];
};

export type Tab = {
  id: string;
  value: string;
};

export type Day = {
  day_name: string;
  day_info: string;
  icon_url: typeof rain;
  temp_day: string;
  temp_night: string;
  info: string;
};

//TODO: add swith or enum for tabs and their value

const Days = ({ days }: Props) => {
  const tabs: Tab[] = [
    {
      id: '2',
      value: 'For 2 days',
    },
    {
      id: '4',
      value: 'For 4 days',
    },
    {
      id: '7',
      value: 'For 7 days',
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={s.days}>
        {days.slice(0, +activeTab).map((day: OnecallWeatherDaily, index) => {
          if (index === 0) {
            return <Card key={index} day={day} dayName={'Today'} />;
          }
          if (index === 1) {
            return <Card key={index} day={day} dayName={'Tomorrow'} />;
          }
          return <Card key={index} day={day} dayName={''} />;
        })}
      </div>
    </>
  );
};

export default Days;
