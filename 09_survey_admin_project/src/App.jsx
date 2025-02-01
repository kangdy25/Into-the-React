import React from 'react';
import ListPage from './pages/ListPage';
import { Route, Routes } from 'react-router-dom';
import BuilderPage from './pages/BuilderPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/builder" element={<BuilderPage />} />
    </Routes>
  );
};

export default App;
