import "../styles/About.css";
import reza from "../images/rezaHajipour.png";

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="content-container">
                <div className="left">
                    <img src={reza} alt="Reza-Hajipour-img" className="reza" />
                    <article>
                        <h4 className="skill">Coding Skills: </h4>
                        <p className="content">
                            HTML5, CSS, Bootstrap, Material-UI, JavaScript,
                            jQuery, Node.js, Express, React, Vue.js,
                            <br />
                            Express-Handlebars, Git & GitHub, SQL databases with
                            PostgreSQL and NoSQL, Jest, SuperTest and React
                            Testing Library·
                        </p>
                        <h4 className="skill">Other Skills:</h4>
                        <p className="content">
                            Adobe Photoshop, Figma, Scrum, Agile Methodologies,
                            Video Production, Final Cut, Adobe Premiere
                        </p>
                        <h4 className="skill">Languages:</h4>
                        <p className="content">
                            English, German, Portuguese, Persian
                        </p>
                    </article>
                </div>
                <p className="right">
                    <h1 className="aboutTitle1">ABOUT ME</h1>
                    <br />
                    <span className="aboutTitle2">Reza Hajipour</span> <br />
                    <p className="aboutTitle3">Full stack developer</p>
                    <br />
                    Hey there!
                    <br /> My name is Reza and I am a Fullstack Web Developer
                    based in Hamburg. <br />
                    <br />
                    At age of 22 I started to work in Radio and TV. During 20+
                    years I worked as directer and editor. I Was director of
                    Arroios Film Festival (Portugal) for 3 years and jury in
                    some international film festivals. <br /> <br />
                    Coding has, ever since I can recall, been something I was
                    eager to follow, so in 2021 took the first steps and
                    enrolled in WBS coding School bootcamp.
                    <br />
                    <br /> A year later, I wanted to improve my coding skills
                    then decided joining SPICED Academy. During my time there I
                    learned even more technologies and polished my existing
                    ones, and found myself in love with the idea of being a
                    Fullstack developer. <br /> <br />
                    At this point, I am a competent Fullstack Web Developer with
                    excellent communication skills and an avid problem solver
                    due to my previous work experience.
                </p>
            </div>
        </div>
    );
};

export default About;
