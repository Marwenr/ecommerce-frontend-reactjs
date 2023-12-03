import React from "react";
import { ItemCard, MainSwiper } from "../../../components";

function Home() {
  const items = [
    {
      id: 1,
      category: "mobile",
      item: [
        {
          id: 1,
          name: "TCL T774H - 20L DS/4G 4/128 GB LUNA BLUE",
          image: "phone1",
          price: 419,
        },
        {
          id: 2,
          name: "XIAOMI Redmi Note 12 - 6G - 128G - Bleu",
          image: "phone2",
          price: 729,
        },
        {
          id: 3,
          name: "XIAOMI Redmi 12 - 8Go - 256Go",
          image: "phone3",
          price: 655,
        },
        {
          id: 4,
          name: "TCL T774H - 20L DS/4G 4/128 GB LUNA BLUE",
          image: "phone1",
          price: 419,
        },
        {
          id: 5,
          name: "XIAOMI Redmi Note 12 - 6G - 128G - Bleu",
          image: "phone2",
          price: 729,
        },
        {
          id: 6,
          name: "XIAOMI Redmi 12 - 8Go - 256Go",
          image: "phone3",
          price: 655,
        },
      ],
    },
    {
      id: 2,
      category: "laptop",
      item: [
        {
          id: 1,
          name: "Lenovo PC Portable I5-12ème -8GO-256ssd-2G Iris",
          image: "laptop1",
          price: 1200,
        },
        {
          id: 2,
          name: "Infinix Intel i3-1005G1- 256GB-4GB",
          image: "laptop2",
          price: 999,
        },
        {
          id: 3,
          name: "Hp Pc HP15 - Intel N4020 - 16G - 1T",
          image: "laptop3",
          price: 895,
        },
        {
          id: 4,
          name: "Lenovo PC Portable I5-12ème -8GO-256ssd-2G Iris",
          image: "laptop1",
          price: 1200,
        },
        {
          id: 5,
          name: "Infinix Intel i3-1005G1- 256GB-4GB",
          image: "laptop2",
          price: 999,
        },
        {
          id: 6,
          name: "Hp Pc HP15 - Intel N4020 - 16G - 1T",
          image: "laptop3",
          price: 895,
        },
      ],
    },
  ];

  return (
    <div>
      {items.map((cat) => (
        <div key={cat.id} className="mb-5">
          <div className="d-flex justify-content-center">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "80%" }}
            >
              <div className="text-capitalize fs-3">{cat.category}</div>
              <div role="button">
                <i className="fa-solid fa-arrow-right-long fs-3"></i>
              </div>
            </div>
          </div>
          <MainSwiper cat={cat}>
            <ItemCard />
          </MainSwiper>
        </div>
      ))}
    </div>
  );
}

export default Home;
