import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { lStorage } from './model/Storage';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import { DailyWeatherModal } from './pages/Home/components/DailyWeatherModal/DailyWeatherModal';

export type Option = {
  value: string;
  label: string;
};

//TODO: rework cities to context, add enum for cities
//TODO: get data form location.state here and send as props or inside <Popup />

const App = () => {
  const selectCityOptions: Option[] = [
    { value: 'lat=50.4547&lon=30.5238', label: 'Киев' },
    { value: 'lat=49.9808&lon=36.2527', label: 'Харьков' },
    { value: 'lat=49.8383&lon=24.0232', label: 'Львов' },
  ];

  const [city, setCity] = useState(lStorage.getItem('city') || selectCityOptions[0].value);

  return (
    <div className="container">
      <Header city={city} selectCityOptions={selectCityOptions} setCity={setCity} />

      <Routes>
        <Route path="/" element={<Home city={city} />}>
          <Route path="popup/:id" element={<DailyWeatherModal />} />
        </Route>
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
};

export default App;
