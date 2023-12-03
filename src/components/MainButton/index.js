import React from "react";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

function MainButton({ children, onClick, type, width, className }) {
  const { bgColor } = styles;
  return (
    <Button className={`${bgColor} ${className}`} onClick={onClick} type={type} style={{ width: width }}>
      {children}
    </Button>
  );
}

export default MainButton;
