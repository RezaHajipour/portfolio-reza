import "../styles/Home.css";
import logo from "../images/5.png";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo-reza" />
                <h1 className="hajipour">Reza Hajipour</h1>
                <h2 className="Fullstack">Fullstack Web Developer</h2>
                <div className="btn_container">
                    <a href="#about">
                        <button className="about_btn">ABOUT ME</button>
                    </a>
                    <a href="#projects">
                        <button className="projects_btn">PROJECTS</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
