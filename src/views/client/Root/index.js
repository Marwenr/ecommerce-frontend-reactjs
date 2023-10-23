import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function Root() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Root;
