import { createContext } from "react";

export type City = {
  coords: string;
  name: string;
}

export const Cities = new Map<string, City>([
  ['kyiv', { coords: 'lat=50.4547&lon=30.5238', name: 'kyiv' }],
  ['kharkiv', { coords: 'lat=49.9808&lon=36.2527', name: 'kharkiv' }],
  ['lviv', { coords: 'lat=49.8383&lon=24.0232', name: 'lviv' }],
]);

type Props = {
  city: City;
  changeCity: (city: City) => void;
}

export const CityContext = createContext<Props>({
  city: Cities.get('kyiv'),
  changeCity: () => {},
})