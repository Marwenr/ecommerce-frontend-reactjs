import React from "react";

function ProductCard({ id, name, price, quantity }) {
  return (
    <tr key={id} className="align-items-center">
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
}

export default ProductCard;
