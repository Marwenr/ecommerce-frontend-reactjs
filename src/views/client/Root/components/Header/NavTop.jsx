import React from "react";
import styles from "./styles.module.css";
import {
  Input,
  MainButton,
  MainDropdown,
  MainNavLink,
} from "../../../../../components";
import {
  Container,
  Image,
  InputGroup,
  Nav,
  Navbar,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavTop({ profile }) {
  const { navbar, nav } = styles;
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Navbar className={navbar} bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={require("../../../../../assets/image/logo.png")} />
        </Navbar.Brand>
        <Form style={{ width: "50%" }} className="ms-3 me-3">
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
            {!isLoggedIn && (
              <MainNavLink to="/login">
                <i className="fa-solid fa-user me-1"></i>
                <span className={nav}>Login</span>
              </MainNavLink>
            )}
            {isLoggedIn && (
              <MainDropdown items={profile}>
                <i className="fa-solid fa-user me-1"></i>
                <span className={nav}>Account</span>
              </MainDropdown>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTop;
