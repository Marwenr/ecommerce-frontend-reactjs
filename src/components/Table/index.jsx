import React from "react";
import { Table } from "react-bootstrap";

function MainTable({ items, children, titles }) {
  return (
    <Table>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>
          React.cloneElement(children, { key: item.id, ...item })
        )}
      </tbody>
    </Table>
  );
}

export default MainTable;
