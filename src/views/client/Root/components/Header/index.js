import React from "react";
import NavBar from "./NavBar";
import NavTop from "./NavTop";

function Header() {
  const profile = [
    { id: 1, title: "Update Profile", to: "update" },
    { id: 2, title: "Logout", to: "logout" },
  ];
  const test = [
    { id: 1, title: "test", to: "test" },
    { id: 2, title: "test2", to: "test2" },
  ];
  const shop = [
    { id: 1, title: "Best Sellers", to: "/bestsellers" },
    { id: 2, title: "Gift Ideas", to: "/giftideas" },
    { id: 3, title: "New Releases", to: "/newreleases" },
    { id: 4, title: "Today's Deals", to: "/todaysdeals" },
    { id: 5, title: "Customer Service", to: "/customerservice" },
  ];

  return (
    <div>
      <NavTop profile={profile} />
      <NavBar shop={shop} test={test} />
    </div>
  );
}

export default Header;
