import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header';
import MainLayout from 'components/MainLayout';

function App() {
  return (
    <Router>
      <Header />
      <MainLayout />
    </Router>
  );
}

export default App;
