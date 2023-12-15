import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Table } from "../../../components";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../store/orderSlice";

function OrderDetails() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className="d-flex align-items-center mt-3 mb-4">
        <BackButton navigateTo={"/admin/order"} />
        <h3>Order #{id}</h3>
      </div>
      {Object.keys(order).length > 0 && (
        <>
          <div className="mt-5 mb-5 d-flex justify-content-between align-items-center gap-3">
            <div className="d-flex flex-wrap">
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
                <p className="text-secondary">Name: {order?.user?.name}</p>
                <p className="text-secondary">Email: {order?.user?.email}</p>
                <p className="text-secondary">Phone: {order?.user?.phone}</p>
              </div>
            </div>
            <div className="d-flex flex-wrap">
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
                <p className="text-secondary">Status: {order?.status}</p>
                <p className="text-secondary">
                  Payment method: {order?.payment}
                </p>
                <p className="text-secondary">Date: {order?.createdAt}</p>
              </div>
            </div>
          </div>
          <h5 className="mb-2">Products:</h5>
          <Table
            items={order.orderProduct}
            titles={["Id", "Name", "Unit Price", "Quantity"]}
          >
            <ProductCard />
          </Table>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
