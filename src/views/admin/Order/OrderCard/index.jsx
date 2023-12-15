import React from "react";
import { Link } from "react-router-dom";

function OrderCard({
  styles,
  className,
  id,
  user,
  status,
  createdAt,
  total,
  deleteOrder,
  dispatch,
}) {
  return (
    <tr key={id} className="align-items-center">
      <td>{id}</td>
      <td>{user.name}</td>
      <td>
        <span className={styles[status]}>{status}</span>
      </td>
      <td className={className}>{createdAt.slice(0, 10)}</td>
      <td>${total}</td>
      <td className={className}>
        <Link to={`${id}`}>
          <i className="fa-regular fa-eye me-2"></i>
        </Link>
        <Link
          to={id}
          style={{ color: "red" }}
          onClick={() => dispatch(deleteOrder(id))}
        >
          <i className="fa-solid fa-trash"></i>
        </Link>
      </td>
    </tr>
  );
}

export default OrderCard;
