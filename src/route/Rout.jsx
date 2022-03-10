import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/HomePage";
import ProductView from "../components/ProductView";
import Cart from "../components/Cart";

import Register from "../components/profile/Register";
import Login from "../components/profile/Login";
import Profile_edit from '../components/profile/Profile_edit';
const Rout = () => {
  return (
    <Routes>
      <Route path="MarketPlace_AisModa/" element={<HomePage />} />
      <Route path="MarketPlace_AisModa/cart/" element={<Cart />} />
      <Route path="MarketPlace_AisModa/login/" element={<Login />} />
      <Route path="MarketPlace_AisModa/register/" element={<Register />} />
      <Route path="MarketPlace_AisModa/Profile_edit/" element={<Profile_edit/>} />
      <Route path="MarketPlace_AisModa/productview/" element={<ProductView />} />


    </Routes>
  )
}

export default Rout