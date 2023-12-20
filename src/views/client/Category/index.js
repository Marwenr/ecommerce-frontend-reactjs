import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryByName } from "../../../store/productSlice";
import { ItemCard } from "../../../components";
import styles from "./styles.module.css";

function Category() {
  const { products } = styles;
  const { category } = useParams();
  const dispatch = useDispatch();
  const { productsByCategory } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getCategoryByName(category));
  }, [dispatch, category]);

  return (
    <div className={products}>
      {Object.keys(productsByCategory).length > 0 &&
        productsByCategory.products.map((el) => (
          <ItemCard key={el.id} {...el} />
        ))}
    </div>
  );
}

export default Category;
