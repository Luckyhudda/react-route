import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import routes from "./../../routes/routes.json";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.linkstyle
                }
                to={routes.HOME}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.linkstyle
                }
                to={routes.ABOUT}
              >
                About
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.linkstyle
                }
                to={routes.PRODUCT}
              >
                Products
              </NavLink>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
