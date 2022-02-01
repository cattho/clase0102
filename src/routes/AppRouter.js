import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from '../components/proyecto/About';
import Home from '../components/proyecto/Home';
import Login from '../components/proyecto/Login';
import Navbar from '../components/proyecto/Navbar';

const AppRouter = () => {
  return (
        <BrowserRouter>
           <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path= '/about' element={<About />} />
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
  );
};

export default AppRouter;
