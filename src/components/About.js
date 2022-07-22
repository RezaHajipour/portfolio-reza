import "../styles/About.css";
import reza from "../images/reza2.png";

const About = () => {
    return (
        <div className="about-container" id="about">
            <h1 className="aboutTitle1">ABOUT ME</h1>

            <div className="content-container">
                <div className="left">
                    <img src={reza} alt="Reza-Hajipour-img" className="reza" />{" "}
                    <br />
                    <span className="aboutTitle2">Reza Hajipour</span>
                    <p className="aboutTitle3">Full stack developer</p>
                    <br />
                    <h4 className="skills">Coding Skills: </h4>
                    <p className="codingSkills">
                        HTML5, CSS, Bootstrap, Material-UI, JavaScript, jQuery,
                        Node.js, Express, React, Vue.js, Express-Handlebars,
                        Git, GitHub, SQL databases with PostgreSQL and NoSQL,
                        Jest, SuperTest and React Testing Library·
                    </p>
                    <h4 className="skills">Other Skills:</h4>
                    <p className="otherSkills">
                        Adobe Photoshop, Figma, Scrum, Agile Methodologies,
                        Video Production, Final Cut, Adobe Premiere
                    </p>
                    <h4 className="skills">Languages:</h4>
                    <p className="languages">
                        English, German, Portuguese, Persian
                    </p>
                </div>
                <p className="right">
                    Hey there!
                    <br />
                    <br /> My name is Reza and I am a Full stack Web Developer
                    based in Hamburg. <br />
                    <br />
                    At age of 22 I started to work in Radio and TV. During 20+
                    years I worked as directer and editor. <br /> <br />
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
                    <br />
                    <br />
                </p>
            </div>
        </div>
    );
};

export default About;
