import "../styles/ScrollToTop.css";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopBtn(true);
            } else {
                setShowScrollTopBtn(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showScrollTopBtn && (
                <FaAngleDoubleUp onClick={scrollTop} className="topBtn" />
            )}
        </div>
    );
};

export default ScrollToTop;
