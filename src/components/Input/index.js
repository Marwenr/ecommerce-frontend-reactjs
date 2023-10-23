import React from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

function Input({ type, placeholder, onChange, value }) {
  const {input} = styles;
  return (
    <Form.Control
      className={input}
      bg="light"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
