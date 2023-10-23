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
  const { navbar, navbarSecondary, separator } = styles;
  const test = [
    { id: 1, title: "test" },
    { id: 2, title: "test2" },
  ];
  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar className={navbar} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={require("../../../../../assets/image/logo.png")} />
          </Navbar.Brand>
          <Form style={{ width: "60%" }}>
            <InputGroup>
              <Input type="text" placeholder="Search product" />
              <MainButton>
                <i class="fa-solid fa-magnifying-glass"></i>
              </MainButton>
            </InputGroup>
          </Form>
          <Nav className="ms-auto">
            <MainNavLink to="/cart">
              <i class="fa-solid fa-cart-shopping me-1"></i>Cart
            </MainNavLink>
            <MainNavLink to="/login">
              <i class="fa-solid fa-user ms-3 me-1"></i>Login
            </MainNavLink>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className={navbarSecondary} bg="light" data-bs-theme="light">
        <Container>
          <MainDropdown items={test}>
            <i class="fa-solid fa-bars me-2"></i>
            Categories
          </MainDropdown>
          <span className={separator}></span>
          <Nav>
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
