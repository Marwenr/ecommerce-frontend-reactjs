import React, { useEffect, useState } from "react";
import { Input, MainButton, Table } from "../../../components";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../../store/productSlice";

function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const titles = ["Name", "Category", "Price", "Action"];
  const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-4">
        <h3>Products</h3>
        <div>
          <MainButton onClick={() => setSearch(!search)} className="me-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </MainButton>
          <MainButton onClick={() => navigate("add")}>
            <i className="fa-solid fa-plus me-2"></i>
            Add Product
          </MainButton>
        </div>
      </div>
      {search && <Input className="mb-3" placeholder="Search Product" />}

      <Table items={products} titles={titles}>
        <ProductCard
          dispatch={dispatch}
          deleteProduct={deleteProduct}
          token={user}
        />
      </Table>
    </div>
  );
}

export default Product;
