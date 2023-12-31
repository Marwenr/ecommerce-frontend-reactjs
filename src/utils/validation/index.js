import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
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
});

export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().min(5, "Invalid phone number").required("Required"),
});

export const productSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
});
