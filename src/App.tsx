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

const App = () => {
  const selectCityOptions: Option[] = [
    { value: 'kyiv', label: 'Киев' },
    { value: 'kharkiv', label: 'Харьков' },
    { value: 'lviv', label: 'Львов' },
  ];

  const [city, setCity] = useState(storage.getItem('city') || selectCityOptions[0].value);

  return (
    <div className="container">
      <Header city={city} selectCityOptions={selectCityOptions} setCity={setCity} />
      <Popup />
      <Routes>
        <Route path="/" element={<Home city={city} />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
};

export default App;
