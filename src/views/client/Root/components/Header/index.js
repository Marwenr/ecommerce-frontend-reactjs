import React, { useEffect } from "react";
import NavBar from "./NavBar";
import NavTop from "./NavTop";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../../store/productSlice";

function Header() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  const profile = ["UpdateProfile", "Logout"];
  const test = ["test", "test2"];
  const shop = [
    { id: 1, title: "Best Sellers", to: "/bestsellers" },
    { id: 2, title: "Gift Ideas", to: "/giftideas" },
    { id: 3, title: "New Releases", to: "/newreleases" },
    { id: 4, title: "Today's Deals", to: "/todaysdeals" },
    { id: 5, title: "Customer Service", to: "/customerservice" },
  ];

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <NavTop profile={profile} />
      <NavBar
        shop={shop}
        categoriesTitle={categories.map((cat) => cat.title)}
        test={test}
      />
    </div>
  );
}

export default Header;
