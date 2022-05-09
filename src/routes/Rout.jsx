import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from "../components/HomePage";
import ProductView from "../components/Product/ProductView";
import Cart from "../components/Product/Card";

import Register from "../components/profile/Register";
import Login from "../components/profile/Login";
import ProfileEdit from '../components/profile/ProfileEdit';
const Rout = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/user/register/" element={<Register />} />
      <Route path="/user/ProfileEdit/" element={<ProfileEdit/>} />
      <Route path="productview/" element={<ProductView />} />
    </Routes>
  )
}

export default Rout