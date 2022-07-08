export type OnecallWeather = {
  timezone: string;
  current: OnecallWeatherCurrent;
  daily: OnecallWeatherDaily;
};

export type OnecallWeatherCurrent = {
  dt: number; //sec
  temp: number;
  feels_like: number;
  pressure: number; //hPa
  humidity: number; //%
  wind_speed: number;
  wind_deg: number;
  wind_gust: number; //??
  weather: [
    {
      main: string; //??Group of weather parameters (Rain, Snow, Extreme etc.)
      icon: string;
    }
  ];
};

export type OnecallWeatherDaily = {
  dt: number; //sec
  temp: {
    day: number;
    min: number;
    max: number;
  };
  feels_like: {
    day: number;
    night: number;
  };
  pressure: number; //hPa
  humidity: number; //%
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  pop: number;
};
