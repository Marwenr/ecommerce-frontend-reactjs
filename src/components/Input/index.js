import React from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

function Input({ type, placeholder, onChange, value, name }) {
  const {input} = styles;
  return (
    <Form.Control
      className={input}
      size="lg"
      bg="light"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
