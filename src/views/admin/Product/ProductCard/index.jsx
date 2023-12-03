import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, name, category, price }) {
  return (
    <tr key={id} className="align-items-center">
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td className="d-flex">
        <Link to="update">
          <i className="fa-regular fa-pen-to-square me-2"></i>
        </Link>
        <Link style={{ color: "red" }}>
          <i className="fa-solid fa-trash"></i>
        </Link>
      </td>
    </tr>
  );
}

export default ProductCard;
