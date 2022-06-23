import "../styles/Work.css";
import Card from "./Card.js";

const Projects = ({ imageUrl, title, description, stack, webpage, github }) => {
    const Works = [
        {
            id: 1,
            imageUrl: require("../images/taxi-tmu.png"),
            title: "TAXI TMU",
            description:
                "an app that allows users to take quizzes on various topics that they can choose between.",
            stack: "html, css, JavaScript, Express, Node.js, Material UI, Figma",
            webpage: "https://taxi-tmu.netlify.app/",
            github: "https://github.com/taxi-TMU",
        },
        {
            id: 2,
            imageUrl: require("../images/crewconnector.png"),
            title: "Crew Connector",
            description:
                "an App to connect film crews. User can register himself as a film crew or search other crews by name, city, title or category.",
            stack: "html, css, JavaScript, Postgres, Express, Node.js",
            webpage: "https://crewconnector.herokuapp.com/",
            github: "https://github.com/RezaHajipour/final_project",
        },
        {
            id: 3,
            imageUrl: require("../images/autowerkstatt-hammerbrook.png"),
            title: "Autowerkstatt Hammerbrook",
            description: "A Statistic Website for Auto repair.",
            stack: "html, css, JavaScript, Material UI",
            webpage: "https://autowerkstatt-hammerbrook.netlify.app/",
            github: "https://github.com/RezaHajipour/werkstatt",
        },
        {
            id: 4,
            imageUrl: require("../images/portfolio.png"),
            title: "Portfolio",
            description: "This exact portfolio website!",
            stack: "html, css, JavaScript",
            webpage: "https://www.rezahajipour.com",
            github: "https://github.com/RezaHajipour/portfolio-reza",
        },
    ];
    return (
        <section className="work-container" id="work">
            <h1 className="work-title">WORK</h1>
            <h4 className="work-subtitle">Check out some of my recent work</h4>
            <div className="CardContainer">
                {Works.map((work) => {
                    return (
                        <div key={work.id} className="row">
                            <Card
                                imageUrl={work.imageUrl}
                                title={work.title}
                                description={work.description}
                                stack={work.stack}
                                webpage={work.webpage}
                                github={work.github}
                                className="cards"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
