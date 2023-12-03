import React, { useState } from "react";
import styles from "./styles.module.css";
import { Input, MainButton, Table } from "../../../components";
import OrderCard from "./OrderCard";
import { Form } from "react-bootstrap";

function Order() {
  const { column, activeStyle } = styles;
  const [active, setActive] = useState("all");
  const items = [
    {
      id: 1,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "pending",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
    {
      id: 2,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "completed",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
    {
      id: 3,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "completed",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
    {
      id: 4,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "cancel",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
    {
      id: 5,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "cancel",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
    {
      id: 6,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "completed",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
    {
      id: 7,
      user: {name: "test", email: "test@gmail.com", phone: "21543546", address: "address"},
      status: "pending",
      date: "24/05/2023",
      payment: "cash",
      total: 15,
      products: [{ id: 1, name: "test", price: 15, quantity: 10 }],
    },
  ];
  const [search, setSearch] = useState(false);
  const titles = ["Id", "Customer", "Status", "Date", "Total", "Action"];
  const titlesForMobile = ["Id", "Customer", "Status", "Total"];
  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-4">
        <h3>Orders</h3>
        <div className="d-flex">
          <Form.Group className="me-2">
            <Form.Control type="date" />
          </Form.Group>
          <MainButton onClick={() => setSearch(!search)} className="me-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </MainButton>
        </div>
      </div>
      {search && <Input className="mb-3" placeholder="Search Product" />}

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
        items={items}
        titles={window.screen.width > 768 ? titles : titlesForMobile}
      >
        <OrderCard className={column} styles={styles} />
      </Table>
    </div>
  );
}

export default Order;
