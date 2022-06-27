import "../styles/Home.css";
import logo from "../images/5.png";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo-reza" />
                <h1 className="hajipour">Reza Hajipour</h1>
                <h2 className="Fullstack">Fullstack Web Developer</h2>
                <div className="btn_container">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="about_btn"
                    >
                        ABOUT ME
                    </Link>

                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        className="work_btn"
                    >
                        RECENT WORK
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
