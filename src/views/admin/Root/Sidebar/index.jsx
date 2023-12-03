import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar({ sidebar }) {
  return (
    <Nav className={sidebar} variant="pills" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link as={Link} eventKey="link-1" to="dashboard">
          <i className="fa-solid fa-qrcode me-2"></i>
          <span>Dashboard</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey="link-2" to="product">
          <i className="fa-solid fa-dolly me-2"></i>
          <span>Product</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey="link-3" to="order">
          <i className="fa-solid fa-bag-shopping me-2"></i>
          <span>Order</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;
