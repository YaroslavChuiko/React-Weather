import React from 'react';
import { sStorage } from '../../../../model/Storage';
import { Tab } from './Days';

import s from './Days.module.scss';

type Props = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {

  const handleTabClick = (e: any) => {
    e.preventDefault();
    sStorage.setItem('activeTab', e.target.id);
    setActiveTab(e.target.id);
  };

  const handleCancelClick = (e: any) => {
    e.preventDefault();
    sStorage.setItem('activeTab', e.target.id);
    setActiveTab(tabs[0].id);
  };

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab: Tab) => {
          const className = tab.id === activeTab ? s.tab + ' ' + s.active : s.tab;

          return (
            <button id={tab.id} type="button" key={tab.id} className={className} onClick={handleTabClick}>
              {tab.value}
            </button>
          );
        })}
      </div>

      <button className={s.cancel} onClick={handleCancelClick}>
        Cancel
      </button>
    </div>
  );
};

export default Tabs;
