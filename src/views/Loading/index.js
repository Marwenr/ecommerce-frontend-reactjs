import React from "react";
import { Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Loading({ isLoading }) {
  return isLoading ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <Outlet />
  );
}

export default Loading;
