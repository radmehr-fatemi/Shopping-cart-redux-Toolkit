import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//Component
import Layout from './components/layout';
import Store from './components/store/Store';
import ProductDetails from './components/details/ProductDetails';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <Store /> } />
        <Route path='/products/:id' element={ <ProductDetails /> } />
        <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
    </Layout>
  );
};

export default App;