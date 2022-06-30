import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import s from './Header.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';
import ChangeThemeIcon from '../../assets/icons/change-theme.svg';

type Props = {};

//TODO: add styles to react select

const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Киев' },
    { value: 'city-2', label: 'Харьков' },
    { value: 'city-3', label: 'Львов' },
  ];

  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(prevValue => (prevValue === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = ['body-background', 'components-background', 'card-background', 'card-shadow', 'text-color'];

    components.forEach(component => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
    })
  }, [theme]);

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000',
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
