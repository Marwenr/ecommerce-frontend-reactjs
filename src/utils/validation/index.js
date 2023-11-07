import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().min(5, "Invalid phone number").required("Required"),
});

export const AuthSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})