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
                            <a href="#home">
                                <p>HOME</p>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <p>ABOUT</p>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <p>PROJECTS</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <p>CONTACT</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </aside>
    );
}

export default Nav;
