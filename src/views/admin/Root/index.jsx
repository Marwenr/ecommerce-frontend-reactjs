import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavbarTop from "./Navbar";

function RootAdmin() {
  const {
    navtop,
    sidebar,
    bars,
    content,
    search,
    sidebarHid,
    contentHid,
  } = styles;
  const profile = [
    { id: 1, title: "Update Profile", to: "update" },
    { id: 2, title: "Logout", to: "logout" },
  ];
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const onclick = () => {
    setSidebarHidden(!sidebarHidden)
  }

  useEffect(() => {
    if (window.innerWidth < 992) {
      setSidebarHidden(true);
    }
  }, []);

  return (
    <div>
      <NavbarTop navtop={navtop} bars={bars} search={search} profile={profile} onclick={onclick} />
      <div>
        <Sidebar
          sidebar={sidebarHidden ? `${sidebar} + ${sidebarHid}` : sidebar}
        />
        <div className={sidebarHidden ? `${content} + ${contentHid}` : content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootAdmin;
