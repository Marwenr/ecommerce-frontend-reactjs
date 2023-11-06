import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function Root() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "var(--bg-color)",
          paddingTop: "50px",
          paddingBottom: "50px",
          minHeight: "calc(100vh - 80.8px - 40.8px - 90.96px )",
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
