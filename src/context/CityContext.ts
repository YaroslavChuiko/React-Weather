import { createContext } from 'react';

export type City = {
  coords: string;
  name: string;
};

type Cities = Map<string, City>;

type Props = {
  currCity: City;
  cities: Cities;
  changeCurrCity: (city: City) => void;
};

export const CityContext = createContext<Props>({
  // currCity: Cities.get('kyiv'),
  currCity: { coords: '', name: '' },
  cities: new Map<string, City>(),
  changeCurrCity: () => {},
});
