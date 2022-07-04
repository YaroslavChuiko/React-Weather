export type Weather = {
  weather: [
    {
      main: string; //Group of weather parameters (Rain, Snow, Extreme etc.)
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    pressure: number; //hPa
    humidity: number; //%
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  dt: number; //sec
  name: string;
};
