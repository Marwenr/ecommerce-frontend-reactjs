import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  Cart,
  ChangePassword,
  Home,
  Login,
  Logout,
  Register,
  Root,
  UpdateProfile,
} from "../views/client";
import ProtectAuth from "../views/Protect/ProtectAuth";
import ProtectRoute from "../views/Protect/ProtectRoute";
import RefreshToken from "../views/RefreshToken";
import Loading from "../views/Loading";
import { AddProduct, Dashboard, LoginAdmin, Order, OrderDetails, Product, RootAdmin, UpdateProduct } from "../views/admin";

function App() {
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route element={<Loading isLoading={isLoading} />}>
        <Route path="/" element={<Root />}>
          <Route element={<RefreshToken />}>
            <Route index="true" element={<Home />} />
            <Route element={<ProtectRoute isLoggedIn={isLoggedIn} />}>
              <Route path="cart" element={<Cart />} />
              <Route path="update" element={<UpdateProfile />} />
              <Route path="password" element={<ChangePassword />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Route>
          <Route element={<ProtectAuth isLoggedIn={isLoggedIn} />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route path="loginadmin" element={<LoginAdmin />} />
        <Route path="admin" element={<RootAdmin />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/update" element={<UpdateProduct />} />
          <Route path="order" element={<Order />} />
          <Route path="order/:id" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
