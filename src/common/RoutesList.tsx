import { Route, Routes } from "react-router-dom";

import Login from "../account/LoginIndex";
import Register from "../account/Register";
import Cart from "../cart/Cart";
import NotFound from "../not-found/NotFound";
import Product from "../product/Product";
import Products from "../products/Products";
import Users from "../users/Users";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesList;
