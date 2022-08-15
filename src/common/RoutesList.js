import React from 'react';
import { Routes, Route } from "react-router-dom";
import Products from "../products/Products";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import Users from "../users/Users";
import Login from "../account/Login";
import Register from "../account/Register";

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" elements={<Register />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default RoutesList;
