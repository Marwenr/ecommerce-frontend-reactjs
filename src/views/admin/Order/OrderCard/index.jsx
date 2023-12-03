import React from "react";
import { Link } from "react-router-dom";

function OrderCard({ styles, className, id, user, status, date, total, products, payment }) {
  return (
    <tr key={id} className="align-items-center">
      <td>{id}</td>
      <td>{user.name}</td>
      <td>
        <span className={styles[status]}>{status}</span>
      </td>
      <td className={className}>{date}</td>
      <td>{total}$</td>
      <td className={className}>
        <Link to={`${id}`} state={{ id, user, status, date, total, products, payment }}>
          <i className="fa-regular fa-eye me-2"></i>
        </Link>
        <Link to={id} style={{ color: "red" }}>
          <i className="fa-solid fa-trash"></i>
        </Link>
      </td>
    </tr>
  );
}

export default OrderCard;
