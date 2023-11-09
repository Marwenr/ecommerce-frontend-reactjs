import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { ProfileSchema } from "../../../utils/validation";
import { updateUser } from "../../../store/userSlice";
import { refreshToken } from "../../../store/authSlice";
import { Box, Input, MainButton } from "../../../components";
import { Alert, Form } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";

function UpdateProfile() {
  const { phone } = styles;
  const dispatch = useDispatch();
  const { userData, user } = useSelector((state) => state.auth);
  const { isUpdated, error } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      name: userData?.name,
      address: userData?.address,
      phone: userData?.phone,
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      const updatedUser = { ...userData, ...values };
      await dispatch(updateUser({ id: userData.id, user: values, token: user }));
      dispatch(refreshToken({token: user, user: updatedUser}));
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <Box width="350px">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Label>Name:</Form.Label>
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
            Update
          </MainButton>
          {error && (
            <Alert variant="danger mt-3 p-2 text-center">{error}</Alert>
          )}
          {isUpdated && (
            <Alert variant="success mt-3 p-2 text-center">
              Profile updated successfully
            </Alert>
          )}
        </Form>
      </Box>
    </div>
  );
}

export default UpdateProfile;
