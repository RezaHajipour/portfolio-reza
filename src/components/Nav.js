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
                alt="menu"
                className="menuIcon"
                onClick={toggleMenu}
            />

            {openMenu ? (
                <div className="menu">
                    <p>yo</p>
                    <p>How are you</p>
                    <p>Today?</p>
                </div>
            ) : null}
        </aside>
    );
}

export default Nav;
