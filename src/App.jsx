import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//Component
import Layout from './components/layout';
import Store from './components/store/Store';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Store /> } />
        <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
    </Layout>
  );
};

export default App;