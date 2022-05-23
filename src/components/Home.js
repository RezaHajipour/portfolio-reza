import "../styles/Home.css";
import logo from "../images/5.png";

function Home() {
    return (
        <section className="home">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="reza">Reza Hajipour</h1>
                <h2 className="Fullstack">Fullstack Web Developer</h2>
                <div className="btn_container">
                    <button className="about_btn">ABOUT ME</button>
                    <button className="projects_btn">PROJECTS</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
