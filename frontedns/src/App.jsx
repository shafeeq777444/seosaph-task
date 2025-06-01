import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Login from './features/auth/Login'
import  { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Register from './features/auth/Register.jsx';
import One from './pages/One';
import ProtectRoutes from './utils/ProtectRoutes.jsx';
import Admin from './pages/Admin';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      {/* user */}
      <Route path='/home' element={<ProtectRoutes><Home/></ProtectRoutes>}>
          <Route index element={<One/>}/>
      </Route>

      {/* undefined route */}
      <Route path='*' element={<Navigate to="/404" />}/>
    </Routes>
    </BrowserRouter>
      <Toaster/>
    </>
  )
}

export default App
