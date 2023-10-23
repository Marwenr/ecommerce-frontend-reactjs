import React from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function MainNavLink({ children, to }) {
  const { active, link } = styles;
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? active : link
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default MainNavLink;
