import React from "react";
import { BackButton, Input, MainButton } from "../../../components";
import { useFormik } from "formik";
import { productSchema } from "../../../utils/validation";
import { Form } from "react-bootstrap";

function AddProduct() {
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
      console.log(values);
    },
  });
  return (
    <div>
      <div className="d-flex align-items-center mt-3 mb-4">
        <BackButton navigateTo={"/admin/product"} />
        <h3>Add Product</h3>
      </div>
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
              <div className="ms-2 text-danger">
                {formik.errors.description}
              </div>
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
            />
            {formik.errors.category && formik.touched.category && (
              <div className="ms-2 text-danger">{formik.errors.category}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category:</Form.Label>
            <Form.Select size="lg">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <MainButton width="100%" type="submit">
            Add Product
          </MainButton>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct;
