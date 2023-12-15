import React, { useEffect } from "react";
import { BackButton } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, updateProd } from "../../../store/productSlice";
import { useParams } from "react-router-dom";
import FormUpdate from "./FormUpdate";

function UpdateProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="d-flex align-items-center mt-3 mb-4">
        <BackButton navigateTo={"/admin/product"} />
        <h3>Update Product</h3>
      </div>
      {Object.keys(product).length > 0 && (
        <FormUpdate
          product={product}
          dispatch={dispatch}
          updateProd={updateProd}
          token={user}
        />
      )}
    </div>
  );
}

export default UpdateProduct;
