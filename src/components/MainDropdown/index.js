import React from "react";
import styles from "./styles.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainDropdown({ children, items, onClick, className }) {
  const { link } = styles;
  return (
    <Dropdown className={`me-3 ${className}`} onClick={onClick}>
      <Dropdown.Toggle className={link} as={Link}>
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items &&
          items.map((item) => (
            <Dropdown.Item
              key={item.id}
              eventKey={item.id}
              as={Link}
              to={item.to}
            >
              {item.title}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MainDropdown;
