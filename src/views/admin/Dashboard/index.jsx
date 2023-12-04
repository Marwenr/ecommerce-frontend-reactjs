import React from "react";
import styles from "./styles.module.css";
import { Box } from "../../../components";
import ChartProduct from "./ChartProduct"
import ChartSales from "./ChartSales"

function Dashboard() {
  const { bgGreen, bgBlue, bgYellow } = styles;

  const data = [
    { name: "January", sales: 400 },
    { name: "February", sales: 300 },
    { name: "March", sales: 600 },
    { name: "April", sales: 200 },
    { name: "May", sales: 500 },
    { name: "June", sales: 700 },
    { name: "July", sales: 800 },
  ];

  const data2 = [
    { name: "Product A", sales: 400 },
    { name: "Product B", sales: 300 },
    { name: "Product C", sales: 600 },
    { name: "Product D", sales: 200 },
    { name: "Product E", sales: 500 },
  ];

  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <Box width="32%" className={bgGreen}>
          <p>Total Customers</p>
          <h3>501</h3>
        </Box>
        <Box width="32%" className={bgBlue}>
          <p>Total Amount</p>
          <h3>$ 35</h3>
        </Box>
        <Box width="32%" className={bgYellow}>
          <p>All Products</p>
          <h3>32</h3>
        </Box>
      </div>
      <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
        <ChartSales data={data} />
        <ChartProduct data={data2} />
      </div>
    </div>
  );
}

export default Dashboard;
