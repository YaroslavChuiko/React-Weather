import React, { ReactNode, useState } from 'react';
import { City, CityContext } from '../context/CityContext';
import { lStorage } from '../model/Storage';

type Props = {
  children: ReactNode;
};

export const CityProvider = ({ children, ...props }: Props) => {
  //TODO: implement CRUD for cities on a separate page, and maybe add state of cities to this provider like part of cityContext
  const Cities = new Map<string, City>([
    ['kyiv', { coords: 'lat=50.4547&lon=30.5238', name: 'kyiv' }],
    ['kharkiv', { coords: 'lat=49.9808&lon=36.2527', name: 'kharkiv' }],
    ['lviv', { coords: 'lat=49.8383&lon=24.0232', name: 'lviv' }],
  ]);

  const [city, setCity] = useState<City>(lStorage.getItem('city') || Cities.get('kyiv'));

  const changeCurrCity = (city: City) => {
    lStorage.setItem('city', city);
    setCity(city);
  };

  return (
    <CityContext.Provider value={{ currCity: city, cities: Cities, changeCurrCity: changeCurrCity }} {...props}>
      {children}
    </CityContext.Provider>
  );
};
