import React, { useState } from "react";
import styles from "./styles.module.css";
import { Box, Input, MainButton, MainNavLink } from "../../../components";
import { Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Register() {
  const { separator, containerAuth, logo, phone } = styles;
  const [value, setValue] = useState();
console.log(value)
  return (
    <div className={containerAuth}>
      <div className={logo}>
        <h2>Ecommerce</h2>
        <p>
          Create a new account today to enjoy the benefits of a shopping
          experience.
        </p>
      </div>
      <Box width="350px">
        <Form>
          <Input type="text" placeholder="Name" />
          <div className="mb-3"></div>
          <Input type="email" placeholder="Email" />
          <div className="mb-3"></div>
          <Input type="password" placeholder="Password" />
          <div className="mt-3 mb-3">
            <div className="mb-3 d-flex gap-3">
              <Input type="text" placeholder="City" />
              <Input type="text" placeholder="Street" />
            </div>
            <div className="d-flex gap-3">
              <Input type="number" placeholder="Number" />
              <Input type="text" placeholder="Zipcode" />
            </div>
          </div>
          <PhoneInput
            className={phone}
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            defaultCountry="TN"
          />
          <MainButton width="100%">Login</MainButton>
          <div className={separator}></div>
          <div className="text-center">
            <span className="me-1">You have an account?</span>
            <MainNavLink to="/login">Log In</MainNavLink>
          </div>
        </Form>
      </Box>
    </div>
  );
}

export default Register;
