import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Box, Input, MainButton } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthSchema } from "../../../utils/validation";
import { signIn } from "../../../store/authSlice";

function Login() {
  const { containerAuth, title } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, userData } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
    },
  });

  useEffect(() => {
    if (userData.role === "admin" || userData.role === "manager") navigate("/admin");
  }, [userData, navigate]);

  return (
    <div className={containerAuth}>
      <Box width="350px" className="mb-5">
        <h2 className={title}>Admin Login.</h2>
        {location?.state?.msg && (
          <Alert variant="success mt-3 p-2 text-center">
            {location?.state?.msg}
          </Alert>
        )}
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
            type="password"
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
      </Box>
    </div>
  );
}

export default Login;
