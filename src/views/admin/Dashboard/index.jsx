import React from "react";
import { Box } from "../../../components";

function Dashboard() {
  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <Box width="32%">
          <p>Total Customers</p>
          <h3>501</h3>
        </Box>
        <Box width="32%">
          <p>Total Amount</p>
          <h3>$ 3500</h3>
        </Box>
        <Box width="32%">
          <p>All Products</p>
          <h3>32</h3>
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;
