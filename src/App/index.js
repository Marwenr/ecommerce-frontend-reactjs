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
import ProtectRoute from "../views/Protect/ProtectRoute";
import ProtectAdmin from "../views/Protect/ProtectAdmin";
import RefreshToken from "../views/RefreshToken";
import Loading from "../views/Loading";
import {
  AddProduct,
  Dashboard,
  Order,
  OrderDetails,
  Product,
  RootAdmin,
  UpdateProduct,
} from "../views/admin";

function App() {
  const { isLoggedIn, isLoading, userData } = useSelector(
    (state) => state.auth
  );

  return (
    <Routes>
      <Route element={<Loading isLoading={isLoading} />}>
        <Route element={<RefreshToken />}>
          <Route path="/" element={<Root />}>
            <Route index="true" element={<Home />} />
            <Route element={<ProtectRoute isLoggedIn={isLoggedIn} />}>
              <Route path="cart" element={<Cart />} />
              <Route path="update" element={<UpdateProfile />} />
              <Route path="password" element={<ChangePassword />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            element={
              <ProtectAdmin isLoggedIn={isLoggedIn} role={userData.role} />
            }
          >
            <Route path="admin" element={<RootAdmin />}>
              <Route path="" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<Product />} />
              <Route path="product/add" element={<AddProduct />} />
              <Route path="product/update/:id" element={<UpdateProduct />} />
              <Route path="order" element={<Order />} />
              <Route path="order/:id" element={<OrderDetails />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
