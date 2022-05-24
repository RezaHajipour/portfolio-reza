import "../styles/Nav.css";
import React, { useState } from "react";
import menuIcon from "../images/burgerMenu.png";

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
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/about">ABOUT</a>
                        </li>
                        <li>
                            <a href="/projects">PROJECTS</a>
                        </li>
                        <li>
                            <a href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </aside>
    );
}

export default Nav;
