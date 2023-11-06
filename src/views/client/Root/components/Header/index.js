import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import {
  Image,
  Form,
  InputGroup,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  Input,
  MainButton,
  MainDropdown,
  MainNavLink,
} from "../../../../../components";

function Header() {
  const { navbar, navbarSecondary, separator, nav, dropNav } = styles;
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
      <Navbar className={navbar} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={require("../../../../../assets/image/logo.png")} />
          </Navbar.Brand>
          <Form style={{ width: "60%" }} className="ms-3 me-3">
            <InputGroup>
              <Input type="text" placeholder="Search product" />
              <MainButton>
                <i className="fa-solid fa-magnifying-glass"></i>
              </MainButton>
            </InputGroup>
          </Form>
          <Nav className="ms-auto">
            <div className="me-3 text-center">
              <MainNavLink to="/cart">
                <i className="fa-solid fa-cart-shopping me-1"></i>
                <span className={nav}>Cart</span>
              </MainNavLink>
            </div>
            <div className="text-center">
              <MainNavLink to="/login">
                <i className="fa-solid fa-user me-1"></i>
                <span className={nav}>Login</span>
              </MainNavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className={navbarSecondary} bg="light" data-bs-theme="light">
        <Container>
          <MainDropdown items={test}>
            <i className="fa-solid fa-bars me-2"></i>
            Categories
          </MainDropdown>
          <span className={separator}></span>
          <Nav className={nav}>
            <MainNavLink to="/bestsellers">
              <span className="ms-3 me-3">Best Sellers</span>
            </MainNavLink>
            <MainNavLink to="/giftideas">
              <span className="me-3">Gift Ideas</span>
            </MainNavLink>
            <MainNavLink to="/newreleases">
              <span className="me-3">New Releases</span>
            </MainNavLink>
            <MainNavLink to="/todaysdeals">
              <span className="me-3">Today's Deals</span>
            </MainNavLink>
            <MainNavLink to="/customerservice">Customer Service</MainNavLink>
          </Nav>
          <div className={dropNav}>
            <MainDropdown items={shop}>Shop</MainDropdown>
          </div>
          <span className={separator}></span>
          <div className="ms-2">
            <MainDropdown items={test}>Languages</MainDropdown>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
