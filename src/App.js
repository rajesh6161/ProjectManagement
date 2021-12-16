import React from 'react';
import Layout from './components/SideBar/Layout';
import { IntlProvider } from 'react-intl';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from './components/SplashScreen/LoginScreen';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/dashboard" element={<Layout />} />
    </Routes>
  );
};

export default App;
