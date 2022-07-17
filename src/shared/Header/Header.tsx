import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

import s from './Header.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';
import ChangeThemeIcon from '../../assets/icons/change-theme.svg';
import { useCity } from '../../hooks/useCity';
import { Cities, City } from '../../context/CityContext';
import { capitalizeFirstLetter } from '../utils';

type Props = {};

//TODO: add styles to react select

const Header = (props: Props) => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const city = useCity();

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setCity(e.target.value);
    // lStorage.setItem('city', e.target.value);
    city.changeCity(Cities.get(e.target.value));
  };

  // const colorStyles = {
  //   control: (styles: any) => ({
  //     ...styles,
  //     backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
  //     width: '194px',
  //     height: '37px',
  //     border: 'none',
  //     borderRadius: '10px',
  //     zIndex: 100,
  //   }),
  //   singleValue: (styles: any) => ({
  //     ...styles,
  //     color: theme.theme === Theme.DARK ? '#fff' : '#000',
  //   }),
  // };

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

        <select value={city.city.name} onChange={handleChangeCity}>
          {Array.from(Cities.entries()).map((item: [string, City]) => {
            return (
              <option key={item[0]} value={item[0]}>
                {capitalizeFirstLetter(item[1].name)}
              </option>
            );
          })}
        </select>
      </div>
    </header>
  );
};

export default Header;
