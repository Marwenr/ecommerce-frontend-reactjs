import React, { useEffect } from "react";
import { BackButton } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, addProduct } from "../../../store/productSlice";
import FormProduct from "./FormProduct";

function AddProduct() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex align-items-center mt-3 mb-4">
        <BackButton navigateTo={"/admin/product"} />
        <h3>Add Product</h3>
      </div>
      {categories.length > 0 && (
        <div className="pt-5">
          <FormProduct
            categories={categories}
            dispatch={dispatch}
            addProduct={addProduct}
            token={user}
          />
        </div>
      )}
    </div>
  );
}

export default AddProduct;
