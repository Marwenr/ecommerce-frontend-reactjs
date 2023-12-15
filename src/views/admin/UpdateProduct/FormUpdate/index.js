import React from "react";
import { Input, MainButton } from "../../../../components";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { productSchema } from "../../../../utils/validation";
import { useNavigate } from "react-router-dom"

function FormUpdate({ product, dispatch, updateProd, token }) {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category.title,
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      dispatch(
        updateProd({
          id: product.id,
          product: {
            title: values.title,
            description: values.description,
            price: values.price,
            image: values.image,
          },
          token,
        })
      );
      navigate("/admin/product")
    },
  });
  return (
    <div className="pt-5">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Input
            type="text"
            placeholder="Title of product"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <div className="ms-2 text-danger">{formik.errors.title}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description:</Form.Label>
          <Input
            type="text"
            placeholder="Description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description && (
            <div className="ms-2 text-danger">{formik.errors.description}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price:</Form.Label>
          <Input
            type="text"
            placeholder="Price of product"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div className="ms-2 text-danger">{formik.errors.price}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Input
            type="text"
            placeholder="Image url"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.errors.image && formik.touched.image && (
            <div className="ms-2 text-danger">{formik.errors.image}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category:</Form.Label>
          <Input
            type="text"
            placeholder="category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            disabled={true}
          />
          {formik.errors.category && formik.touched.category && (
            <div className="ms-2 text-danger">{formik.errors.category}</div>
          )}
        </Form.Group>

        <MainButton width="100%" type="submit">
          Update Product
        </MainButton>
      </Form>
    </div>
  );
}

export default FormUpdate;
