import React from "react";
import styles from "./styles.module.css";

function Box({ children, width, height, className }) {
  const { content } = styles;
  return (
    <div className={`${content} ${className}`} style={{ width: width, height: height }}>
      {children}
    </div>
  );
}

export default Box;
