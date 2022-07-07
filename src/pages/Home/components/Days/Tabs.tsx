import React from 'react';

import s from './Days.module.scss';

type Props = {};

type Tab = {
  value: string;
};

const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На 30 дней',
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab: Tab) => (
          <button type="button" key={tab.value} className={s.tab}>
            {tab.value}
          </button>
        ))}
      </div>

      <button className={s.cancel}>Отменить</button>
    </div>
  );
};

export default Tabs;
