import React, { useEffect } from "react";
import { ItemCard, MainSwiper } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/productSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.id} className="mb-5">
          <div className="d-flex justify-content-center">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "80%" }}
            >
              <div className="text-capitalize fs-3">{cat.title}</div>
              <Link to={cat.title} className="text-dark">
                <i className="fa-solid fa-arrow-right-long fs-3"></i>
              </Link>
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
