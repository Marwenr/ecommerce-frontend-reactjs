import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  title,
  category,
  price,
  deleteProduct,
  dispatch,
  token,
}) {
  return (
    <tr key={id} className="align-items-center">
      <td>{title}</td>
      <td>{category.title}</td>
      <td>{price}</td>
      <td className="d-flex">
        <Link to={`update/${id}`}>
          <i className="fa-regular fa-pen-to-square me-2"></i>
        </Link>
        <Link
          style={{ color: "red" }}
          onClick={() => dispatch(deleteProduct({ id, token }))}
        >
          <i className="fa-solid fa-trash"></i>
        </Link>
      </td>
    </tr>
  );
}

export default ProductCard;
