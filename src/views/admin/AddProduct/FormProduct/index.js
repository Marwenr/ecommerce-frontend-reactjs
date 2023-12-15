import React from "react";
import { Input, MainButton } from "../../../../components";
import { useFormik } from "formik";
import { productSchema } from "../../../../utils/validation";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FormProduct({ categories, dispatch, addProduct, token }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      image: "",
      category: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      dispatch(addProduct({ product: values, token }));
      navigate("/admin/product");
    },
  });

  return (
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
          type="number"
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
        <div className="d-flex">
          <Form.Select
            size="lg"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            className="me-2"
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
          </Form.Select>
          <Input
            type="text"
            placeholder="New category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
        </div>
        {formik.errors.category && formik.touched.category && (
          <div className="ms-2 text-danger">{formik.errors.category}</div>
        )}
      </Form.Group>

      <MainButton width="100%" type="submit">
        Add Product
      </MainButton>
    </Form>
  );
}

export default FormProduct;
