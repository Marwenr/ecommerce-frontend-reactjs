import React from "react";
import { Input, MainButton, MainDropdown } from "../../../../components";
import { Form, Image, InputGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarTop({ navtop, bars, search, profile, onclick }) {
  return (
    <Navbar className={navtop} bg="white" data-bs-theme="light">
      <div className={bars} onClick={onclick}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <Navbar.Brand as={Link} to="">
        <Image src={require("../../../../assets/image/Ecommerce-admin.png")} />
      </Navbar.Brand>
      <Form className={search}>
        <InputGroup>
          <Input type="text" placeholder="Search" />
          <MainButton>
            <i className="fa-solid fa-magnifying-glass"></i>
          </MainButton>
        </InputGroup>
      </Form>
      <MainDropdown items={profile} className="ms-auto">
        <i className="fa-solid fa-user me-1"></i>
        <span>Account</span>
      </MainDropdown>
    </Navbar>
  );
}

export default NavbarTop;
