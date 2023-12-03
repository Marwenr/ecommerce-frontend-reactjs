import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function BackButton({ navigateTo }) {
  const { back } = styles;
  const navigate = useNavigate();
  return (
    <div className={back} onClick={() => navigate(navigateTo)}>
      <i className="fa-solid fa-arrow-left"></i>
    </div>
  );
}

export default BackButton;
