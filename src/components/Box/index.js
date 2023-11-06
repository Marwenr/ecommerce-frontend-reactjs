import React from "react";
import styles from "./styles.module.css";

function Box({ children, width }) {
  const { content } = styles;
  return (
    <div className={content} style={{ width: width }}>
      {children}
    </div>
  );
}

export default Box;
