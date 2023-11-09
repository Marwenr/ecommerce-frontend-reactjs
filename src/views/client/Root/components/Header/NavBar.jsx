import React from "react";
import styles from "./styles.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MainDropdown, MainNavLink } from "../../../../../components";

function NavBar({shop, test}) {
  const { navbarSecondary, separator, nav, dropNav } = styles;
  return (
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
  );
}

export default NavBar;
