import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import NavbarSearchHook from "../../hook/search/NavbarSearchHook";
import AllCartProductsHook from "../../hook/cart/GetAllUserCartHook";
const NavBarLogin = () => {
  const [searchWord, onChangeSerachWord] = NavbarSearchHook();
  const [itemsNum]=AllCartProductsHook()
  let keyword = "";
  if (localStorage.getItem("searchWord")) {
    keyword = localStorage.getItem("searchWord");
  }

  const [user, setUser] = useState("");
   console.log("catsItemmmms>>>>>>>>>>>>>>>>>>>>>",itemsNum)

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      console.log("user", user);
    }
  }, []);

  const logOut = () => {
    const newuser = localStorage.removeItem("user");
    setUser("");
    console.log("reUser", newuser);
  };
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={keyword}
            type="search"
            placeholder="ابحث..."
            onChange={onChangeSerachWord}
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user?.name ? (
              <NavDropdown title={user?.name} id="basic-nav-dropdown">
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    control page
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    profile page
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item onClick={logOut} href="/login">
                  logout{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="position-relative nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
               {itemsNum}
                <span class="visually-hidden">unread messages</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
