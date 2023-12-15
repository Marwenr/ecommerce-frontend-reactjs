import React from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

function Input({
  type,
  placeholder,
  onChange,
  value,
  name,
  className,
  disabled,
}) {
  const { input } = styles;
  return (
    <Form.Control
      className={`${input} ${className}`}
      size="lg"
      bg="light"
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
