import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/HomePage";
import ProductView from "../components/ProductView";
import Cart from "../components/Cart";
import Register from "../components/profile/Register";
import Login from "../components/profile/Login";
import Profile from '../components/profile/Profile';

const GlobalRoutes = () => {
  const base ="MarketPlace_AisModa"
  return (
    <Routes>
      <Route path={`${base}/`} element={<HomePage />} />
      <Route path={`${base}/cart/`} element={<Cart />} />
      <Route path={`${base}/login/`} element={<Login />} />
      <Route path={`${base}/register/`} element={<Register />} />
      <Route path={`${base}/profile_edit/`} element={<Profile/>} />
      <Route path={`${base}/productview/`} element={<ProductView />} />


    </Routes>
  )
}

export default GlobalRoutes