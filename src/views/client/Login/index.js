import React from "react";
import styles from "./styles.module.css";
import { Box, Input, MainButton, MainNavLink } from "../../../components";

function Login() {
  const { separator, containerAuth, logo } = styles;
  return (
    <div className={containerAuth}>
      <div className={logo}>
        <h2>Ecommerce</h2>
        <p>Login to enjoy the benefits of a shopping experience.</p>
      </div>
      <Box width="350px">
        <Input type="text" placeholder="Email" />
        <div className="mb-3"></div>
        <Input type="text" placeholder="Password" />
        <span className="mb-3 d-block"></span>
        <MainButton width="100%">Login</MainButton>
        <div className={separator}></div>
        <div className="text-center">
          <span className="me-1">Don't have an account?</span>
          <MainNavLink to="/register">Sign up</MainNavLink>
        </div>
      </Box>
    </div>
  );
}

export default Login;
