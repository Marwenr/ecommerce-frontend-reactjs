import React from "react";
import styles from "./styles.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainDropdown({ children, items }) {
  const { link } = styles;
  return (
    <Dropdown className="me-3">
      <Dropdown.Toggle className={link} as={Link}>
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu as={Link}>
        {items &&
          items.map((item) => (
            <Dropdown.Item eventKey={item.id} as={Link} to={item.to}>
              {item.title}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MainDropdown;
