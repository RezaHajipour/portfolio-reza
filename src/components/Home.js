import "../styles/Home.css";
import logo from "../images/5.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="home">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo-reza" />
                <h1 className="hajipour">Reza Hajipour</h1>
                <h2 className="Fullstack">Fullstack Web Developer</h2>
                <div className="btn_container">
                    <Link to="/about">
                        {" "}
                        <button className="about_btn">ABOUT ME</button>
                    </Link>
                    <Link to="/projects">
                        {" "}
                        <button className="projects_btn">PROJECTS</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
