import React from "react";
import styles from "./styles.module.css";
import { Box, Input, MainButton, MainNavLink } from "../../../components";
import { Alert, Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../store/userSlice";
import { useFormik } from "formik";
import { UserSchema } from "../../../utils/validation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const { separator, containerAuth, logo, phone } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isCreated } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      dispatch(createUser(values));
    },
  });

  useEffect(() => {
    if (isCreated) {
      navigate("/login", {
        state: {
          msg: "Your account has been created successfully login now !",
        },
      });
    }
  }, [isCreated, navigate]);

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
        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="ms-2 text-danger">{formik.errors.name}</div>
          )}
          <div className="mb-3"></div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="ms-2 text-danger">{formik.errors.email}</div>
          )}
          <div className="mb-3"></div>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="ms-2 text-danger">{formik.errors.password}</div>
          )}
          <div className="mb-3"></div>
          <Input
            type="text"
            placeholder="Address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address && formik.touched.address && (
            <div className="ms-2 text-danger">{formik.errors.address}</div>
          )}
          <div className="mb-3"></div>
          <PhoneInput
            className={phone}
            placeholder="Enter phone number"
            defaultCountry="TN"
            name="phone"
            onChange={(phone) => formik.setFieldValue("phone", phone)}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="mb-2 ms-2 text-danger">{formik.errors.phone}</div>
          )}
          <MainButton width="100%" type="submit">
            Register
          </MainButton>
        </Form>
        {error && <Alert variant="danger mt-3 p-2 text-center">{error}</Alert>}
        <div className={separator}></div>
        <div className="text-center">
          <span className="me-1">You have an account?</span>
          <MainNavLink to="/login">Log In</MainNavLink>
        </div>
      </Box>
    </div>
  );
}

export default Register;
