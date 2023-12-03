import React, { useState } from "react";
import { Input, MainButton, Table } from "../../../components";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function Product() {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      name: "TCL T774H - 20L DS/4G 4/128 GB LUNA BLUE",
      image: "phone1",
      price: 419,
      category: "tv",
    },
    {
      id: 2,
      name: "XIAOMI Redmi Note 12 - 6G - 128G - Bleu",
      image: "phone2",
      price: 729,
      category: "tv",
    },
    {
      id: 3,
      name: "XIAOMI Redmi 12 - 8Go - 256Go",
      image: "phone3",
      price: 655,
      category: "tv",
    },
    {
      id: 4,
      name: "TCL T774H - 20L DS/4G 4/128 GB LUNA BLUE",
      image: "phone1",
      price: 419,
      category: "tv",
    },
    {
      id: 5,
      name: "XIAOMI Redmi Note 12 - 6G - 128G - Bleu",
      image: "phone2",
      price: 729,
      category: "tv",
    },
    {
      id: 6,
      name: "XIAOMI Redmi 12 - 8Go - 256Go",
      image: "phone3",
      price: 655,
      category: "tv",
    },
  ];
  const [search, setSearch] = useState(false);
  const titles = ["Customer", "Status", "Date", "Action"];
  return (
    <div>
      <div className="d-flex justify-content-between mt-3 mb-4">
        <h3>Products</h3>
        <div>
          <MainButton onClick={() => setSearch(!search)} className="me-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </MainButton>
          <MainButton onClick={() => navigate("add")}>
            <i className="fa-solid fa-plus me-2"></i>
            Add Product
          </MainButton>
        </div>
      </div>
      {search && <Input className="mb-3" placeholder="Search Product" />}

      <Table items={items} titles={titles}>
        <ProductCard />
      </Table>
    </div>
  );
}

export default Product;
