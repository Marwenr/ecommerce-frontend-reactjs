import React from "react";
import styles from "./styles.module.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const { navbarSecondary, copyrightText } = styles;
  return (
    <div>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className={navbarSecondary}
      >
        <p className={copyrightText}>
          © 2023 All Rights Reserved. Design & Code by
          <Link className="ms-1" to="https://www.linkedin.com/in/marwen-rhim-900787279/">Marwen</Link>
        </p>
      </Navbar>
    </div>
  );
}

export default Footer;
