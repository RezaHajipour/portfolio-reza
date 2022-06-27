import "../styles/Nav.css";
import React, { useState } from "react";
import menuIcon from "../images/burgerMenu.png";
import { Link } from "react-scroll";

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
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="navlink"
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className="navlink"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className="navlink"
                            >
                                WORK
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className="navlink"
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </aside>
    );
}

export default Nav;
