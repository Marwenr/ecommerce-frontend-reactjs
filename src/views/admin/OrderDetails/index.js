import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { BackButton, Table } from "../../../components";
import ProductCard from "./ProductCard";

function OrderDetails() {
  let { id } = useParams();
  let { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div className="d-flex align-items-center mt-3 mb-4">
        <BackButton navigateTo={"/admin/order"} />
        <h3>Order #{id}</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div>
            <i
              className="fa-regular fa-user"
              style={{
                padding: "15px",
                backgroundColor: "#f4f4f4",
                borderRadius: "100%",
                fontSize: "20px",
              }}
            ></i>
          </div>
          <div className="ms-2">
            <h5>Customer</h5>
            <p className="text-secondary">Name: {state.user.name}</p>
            <p className="text-secondary">Email: {state.user.email}</p>
            <p className="text-secondary">Phone: {state.user.phone}</p>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <i
              className="fa-solid fa-cart-shopping"
              style={{
                padding: "15px",
                backgroundColor: "#f4f4f4",
                borderRadius: "100%",
                fontSize: "20px",
              }}
            ></i>
          </div>
          <div className="ms-2">
            <h5>Order Info</h5>
            <p className="text-secondary">Status: {state.status}</p>
            <p className="text-secondary">Payment method: {state.payment}</p>
            <p className="text-secondary">Date: {state.date}</p>
          </div>
        </div>
      </div>
      <h5 className="mb-2">Products:</h5>
      <Table
        items={state.products}
        titles={["Id", "Name", "Unit Price", "Quantity"]}
      >
        <ProductCard />
      </Table>
    </div>
  );
}

export default OrderDetails;
