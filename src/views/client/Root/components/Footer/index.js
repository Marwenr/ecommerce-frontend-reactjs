import React from "react";
import styles from "./styles.module.css";
import { Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const { navbar, navbarSecondary, copyrightText } = styles;
  return (
    <div style={{ marginTop: "50px" }}>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className={navbar}
      >
        <Image src={require("../../../../../assets/image/logo.png")} />
      </Navbar>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className={navbarSecondary}
      >
        <p className={copyrightText}>
          © 2020 All Rights Reserved. Design & Code by
          <Link className="ms-1" to="https://www.linkedin.com/in/marwen-rhim-900787279/">Marwen</Link>
        </p>
      </Navbar>
    </div>
  );
}

export default Footer;
