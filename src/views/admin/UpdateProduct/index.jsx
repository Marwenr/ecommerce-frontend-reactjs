import React from "react";
import { BackButton, Box } from "../../../components";

function UpdateProduct() {
  return (
    <Box width="100%" className="d-flex align-items-center">
      <BackButton navigateTo={"/admin/product"} />
      <h3>Update Product</h3>
    </Box>
  );
}

export default UpdateProduct;
