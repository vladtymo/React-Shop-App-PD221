import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import NoPage from './components/NoPage';
import CreateForm from './components/CreateForm';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/create" element={<CreateForm />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
export default App;