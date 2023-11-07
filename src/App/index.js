import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Login, Register, Root } from "../views/client";
import ProtectAuth from "../views/Protect/ProtectAuth";
import ProtectRoute from "../views/Protect/ProtectRoute";

function App() {
  const user = localStorage.getItem("user");
  const isLoggedIn = user ? true : false;

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index="true" element={<Home />} />
        <Route element={<ProtectRoute isLoggedIn={isLoggedIn} />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route element={<ProtectAuth isLoggedIn={isLoggedIn} />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
