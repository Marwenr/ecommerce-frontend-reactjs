import React from "react";

function ProductCard({ id, product, quantity }) {
  return (
    <tr key={id} className="align-items-center">
      <td>{id}</td>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{quantity}</td>
    </tr>
  );
}

export default ProductCard;
