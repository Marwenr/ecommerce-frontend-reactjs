import React, { useState } from "react";
import styles from "./styles.module.css";
import { Input, MainButton, Table } from "../../../components";
import OrderCard from "./OrderCard";
import { Form } from "react-bootstrap";
import { getOrders, deleteOrder } from "../../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Order() {
  const { column, activeStyle } = styles;
  const dispatch = useDispatch();
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState(false);
  const [date, setDate] = useState("");
  const [id, setId] = useState(0);
  const titles = ["Id", "Customer", "Status", "Date", "Total", "Action"];
  const titlesForMobile = ["Id", "Customer", "Status", "Total"];
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const filterOrder = () => {
    if (id) {
      return orders.filter((order) => order.id === +id);
    }
    if (active === "all" && !date) {
      return orders;
    }
    const filteredOrders = orders.filter((order) => {
      const isDateMatch = !date || order.createdAt.slice(0, 10) === date;
      const isStatusMatch = active === "all" || order.status === active;
      return isDateMatch && isStatusMatch;
    });
    return filteredOrders;
  };

  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-4">
        <h3>Orders</h3>
        <div className="d-flex">
          <Form.Group className="me-2">
            <Form.Control
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <MainButton onClick={() => setSearch(!search)} className="me-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </MainButton>
        </div>
      </div>
      {search && (
        <Input
          className="mb-3"
          placeholder="Search Product"
          onChange={(e) => setId(e.target.value)}
        />
      )}

      <div className="mb-3">
        <span
          role="button"
          className={`me-3 ${active === "all" ? activeStyle : ""}`}
          onClick={() => setActive("all")}
        >
          All
        </span>
        <span
          role="button"
          className={`me-3 ${
            active === "pending"
              ? `${activeStyle} ${styles["pendingActive"]}`
              : ""
          }`}
          onClick={() => setActive("pending")}
        >
          pending
        </span>
        <span
          role="button"
          className={`me-3 ${
            active === "completed"
              ? `${activeStyle} ${styles["completedActive"]}`
              : ""
          }`}
          onClick={() => setActive("completed")}
        >
          completed
        </span>
        <span
          role="button"
          className={`me-3 ${
            active === "cancel"
              ? `${activeStyle} ${styles["cancelActive"]}`
              : ""
          }`}
          onClick={() => setActive("cancel")}
        >
          cancel
        </span>
      </div>

      <Table
        items={filterOrder()}
        titles={window.screen.width > 768 ? titles : titlesForMobile}
      >
        <OrderCard
          className={column}
          styles={styles}
          dispatch={dispatch}
          deleteOrder={deleteOrder}
        />
      </Table>
    </div>
  );
}

export default Order;
