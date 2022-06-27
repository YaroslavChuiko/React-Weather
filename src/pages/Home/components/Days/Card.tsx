import React from 'react';
import { Day } from './Days';

import s from './Days.module.scss';

type Props = {
  day: Day;
};

const Card = ({ day }: Props) => {
  const { day_name, day_info, icon_url, temp_day, temp_night, info } = day;

  return (
    <div className={s.card}>
      <div className={s.day_name}>{day_name}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.icon}>
        <img src={icon_url} alt="icon" />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};

export default Card;
