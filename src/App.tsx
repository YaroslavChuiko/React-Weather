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

const App = () => {

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dialog/:id" element={<DailyWeatherModal />} />
        </Route>
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
};

export default App;
