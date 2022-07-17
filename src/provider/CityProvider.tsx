import React, { ReactNode, useState } from 'react';
import { Cities, City, CityContext } from '../context/CityContext';
import { lStorage } from '../model/Storage';

type Props = {
  children: ReactNode;
};

export const CityProvider = ({ children, ...props }: Props) => {
  const [city, setCity] = useState<City>(lStorage.getItem('city') || Cities.get('kyiv'));

  const changeCity = (city: City) => {
    lStorage.setItem('city', city);
    setCity(city);
  };

  return (
    <CityContext.Provider value={{ city: city, changeCity }} {...props}>
      {children}
    </CityContext.Provider>
  );
};
