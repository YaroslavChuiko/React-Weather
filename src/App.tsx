import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { storage } from './model/Storage';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

export type Option = {
  value: string;
  label: string;
};

//TODO: rework cities to context, add enum for cities

const App = () => {
  const selectCityOptions: Option[] = [
    { value: 'lat=50.4547&lon=30.5238', label: 'Киев' },
    { value: 'lat=49.9808&lon=36.2527', label: 'Харьков' },
    { value: 'lat=49.8383&lon=24.0232', label: 'Львов' },
  ];

  const [city, setCity] = useState(storage.getItem('city') || selectCityOptions[0].value);

  return (
    <div className="container">
      <Header city={city} selectCityOptions={selectCityOptions} setCity={setCity} />
      {0 ? <Popup /> : null}
      <Routes>
        <Route path="/" element={<Home city={city} />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
};

export default App;
