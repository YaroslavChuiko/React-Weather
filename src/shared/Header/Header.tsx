import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

import s from './Header.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';
import ChangeThemeIcon from '../../assets/icons/change-theme.svg';

type Props = {};

//TODO: add styles to react select

const Header = (props: Props) => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const options = [
    { value: 'city-1', label: 'Киев' },
    { value: 'city-2', label: 'Харьков' },
    { value: 'city-3', label: 'Львов' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <LogoIcon />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <ChangeThemeIcon />
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  );
};

export default Header;
