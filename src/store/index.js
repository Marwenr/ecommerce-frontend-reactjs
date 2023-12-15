import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice"
import user from "./userSlice"
import order from "./orderSlice"
import product from "./productSlice"

export default configureStore({ reducer: {auth, user, product, order} })