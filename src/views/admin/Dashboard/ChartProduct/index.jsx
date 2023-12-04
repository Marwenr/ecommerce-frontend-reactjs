import React from "react";
import { Box } from "../../../../components";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import { Tooltip } from "react-bootstrap";

function ChartsProduct({ data }) {
  return (
    <Box className="mb-3">
      <h2 className="ms-3 mb-4">Product Sales Chart</h2>
      <BarChart
        width={window.screen.width > 768 ? 560 : 280}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Bar dataKey="sales" fill="#1b97f3" />
        <Tooltip />
        <Legend />
      </BarChart>
    </Box>
  );
}

export default ChartsProduct;
