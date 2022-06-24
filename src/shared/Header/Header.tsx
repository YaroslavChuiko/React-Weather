import React from 'react';
import Select from 'react-select'

import s from './Header.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';
import ChangeThemeIcon from '../../assets/icons/change-theme.svg';

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <LogoIcon className={s.logo} />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className="change-theme">
          <ChangeThemeIcon />
        </div>
        <Select options={options} />
      </div>
    </header>
  );
};

export default Header;
