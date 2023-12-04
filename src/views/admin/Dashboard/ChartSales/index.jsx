import React from "react";
import { Box } from "../../../../components";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { Tooltip } from "react-bootstrap";

function ChartSales({ data }) {
  return (
    <Box className="mb-3">
      <h2 className="ms-3 mb-4">Monthly Sales Chart</h2>
      <LineChart
        width={window.screen.width > 768 ? 560 : 280}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="sales" stroke="#1b97f3" />
        <Tooltip />
        <Legend />
      </LineChart>
    </Box>
  );
}

export default ChartSales;
