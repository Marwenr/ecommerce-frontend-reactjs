import React from "react";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

function MainButton({ children, onClick, type }) {
  const { bgColor } = styles;
  return (
    <Button className={bgColor} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}

export default MainButton;
