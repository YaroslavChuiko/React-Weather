import React from 'react';

import s from './Preloader.module.scss';

type Props = {};

const Preloader = (props: Props) => {
  return (
    <div className={s.preloader}>
      <div className={s['pl-sun']}>
        <div className={s.loader}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
