import "../styles/Nav.css";
import React, { useState } from "react";
import menuIcon from "../images/burgerMenu.png";
import { NavLink } from "react-router-dom";

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
                            <NavLink to="/">
                                <p>HOME</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <p>ABOUT</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">
                                <p>PROJECTS</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <p>CONTACT</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </aside>
    );
}

export default Nav;
