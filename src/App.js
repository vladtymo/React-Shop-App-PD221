import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import NoPage from './components/NoPage';
import CreateForm from './components/CreateForm';
import Login from './components/Login';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="products/create" element={<CreateForm />} />
        <Route path="products/edit/:id" element={<CreateForm />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
export default App;