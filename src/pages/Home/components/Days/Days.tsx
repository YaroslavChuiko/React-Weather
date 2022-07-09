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
import { sStorage } from '../../../../model/Storage';

type Props = {
  days: OnecallWeatherDaily[];
};

export type Tab = {
  id: string;
  value: string;
};

const Days = ({ days }: Props) => {
  const tabs: Tab[] = [
    {
      id: '0',
      value: 'For 2 days',
    },
    {
      id: '1',
      value: 'For 4 days',
    },
    {
      id: '2',
      value: 'For 7 days',
    },
  ];

  const [activeTab, setActiveTab] = useState(sStorage.getItem('activeTab') || tabs[0].id);

  const determineNumberOfCards = (activeTabId: number) => {
    switch (activeTabId) {
      case 0:
        return 2;
  
      case 1:
        return 4;
  
      case 2:
        return 7;
  
      default:
        return 2;
    }
  }

  const cards = days.slice(0, determineNumberOfCards(+activeTab));

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={s.days}>
        {cards.map((day: OnecallWeatherDaily, index) => {
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
