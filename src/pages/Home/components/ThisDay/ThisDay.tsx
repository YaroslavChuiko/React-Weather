import React from 'react';

import s from './ThisDay.module.scss';
import SunIcon from '../../../../assets/icons/sun.svg';

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block__wrapper}>
          <div className={s.this_tempr}>20°</div>
          <div className={s.this_day__name}>Сегодня</div>
        </div>
        <SunIcon className={s.weather_icon} />
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this_city}>
          Город: <span>Киев</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
