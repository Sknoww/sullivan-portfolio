import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/snowLogoBlackSmall.png";

// Css
import "../css/navbar.css";

// Stateless functional component
const NavigationBar = ({ style, handleLoggedInNavBar }) => {
    return (
        <Navbar style={style} variant="dark" bg="primary" expand="lg">
            <Navbar.Brand>
                <img className="navBarLogo" src={logo} alt=""></img>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="order-md-1 order-0"
            />
            <Navbar.Collapse
                className="order-md-1 order-0"
                id="basic-navbar-nav"
            >
                <Nav className="navLinksBar">
                    <Nav.Link className="navBarLink" href="/">
                        Welcome
                    </Nav.Link>
                    <Nav.Link className="navBarLink" href="/RecipeSaver">
                        Recipe Saver
                    </Nav.Link>
                    {handleLoggedInNavBar}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
