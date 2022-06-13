import "../styles/Nav.css";
import React, { useState } from "react";
import menuIcon from "../images/burgerMenu.png";
import { Link } from "react-router-dom";

function Nav() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <aside className="nav-container">
            <img
                src={menuIcon}
                alt="menuIcon"
                className="menuIcon"
                onClick={toggleMenu}
            />

            {openMenu ? (
                <nav className="nav open">
                    <ul>
                        <li>
                            <Link to="/">
                                <p>HOME</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <p>ABOUT</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <p>PROJECTS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <p>CONTACT</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </aside>
    );
}

export default Nav;
