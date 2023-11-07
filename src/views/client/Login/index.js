import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Box, Input, MainButton, MainNavLink } from "../../../components";
import { signIn } from "../../../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {AuthSchema} from "../../../utils/validation"

function Login() {
  const { separator, containerAuth, logo } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const { error, user } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
    }
  })

  useEffect(() => {
    if (user.token) navigate("/");
  }, [user, navigate]);

  return (
    <div className={containerAuth}>
      <div className={logo}>
        <h2>Ecommerce</h2>
        <p>Login to enjoy the benefits of a shopping experience.</p>
      </div>
      <Box width="350px">
        {location?.state?.msg && <Alert variant="success mt-3 p-2 text-center">{location?.state?.msg}</Alert>}
        <Form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
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
            type="text"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="ms-2 text-danger">{formik.errors.password}</div>
          )}
          <span className="mb-3 d-block"></span>
          <MainButton width="100%" type="submit">
            Login
          </MainButton>
        </Form>
        {error && <Alert variant="danger mt-3 p-2 text-center">{error}</Alert>}
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
