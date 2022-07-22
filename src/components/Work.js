import "../styles/Work.css";
import Card from "./Card.js";

const Projects = ({ imageUrl, title, description, stack, webpage, github }) => {
    const Works = [
        {
            id: 1,
            imageUrl: require("../images/crewconnector.png"),
            title: "Crew Connector",
            description:
                "a web App to connect film crews. User can register himself as a film crew or search other crews by name, city, title or category.",
            stack: "html, css, JavaScript, Postgres, Express, Node.js",
            webpage: "https://crewconnector.herokuapp.com/",
            github: "https://github.com/RezaHajipour/final_project",
        },
        {
            id: 2,
            imageUrl: require("../images/socialnetwork.png"),
            title: "SocialNetwork",
            description:
                "A social network app on which users can sign up, say a little about themselves, and become friends with other users and also chat with other users.",
            stack: "JavaScript, html, css, Postgres, node.js, express, socket.io",
            webpage: "https://we-web.herokuapp.com/login",
            github: "https://github.com/RezaHajipour/socialNetwork",
        },
        {
            id: 3,
            imageUrl: require("../images/taxi-tmu.png"),
            title: "TAXI TMU",
            description:
                "an app that allows users to take quizzes on various topics that they can choose between.",
            stack: "html, css, JavaScript, Express, Node.js, Material UI, Figma",
            webpage: "https://taxi-tmu.netlify.app/",
            github: "https://github.com/taxi-TMU",
        },
        {
            id: 3,
            imageUrl: require("../images/autowerkstatt-hammerbrook.png"),
            title: "Autowerkstatt",
            description: "A Statistic Website for Auto repair.",
            stack: "html, css, JavaScript, Material UI",
            webpage: "https://autowerkstatt-hammerbrook.com/",
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
        {
            id: 5,
            imageUrl: require("../images/panes.png"),
            title: "Resizable Panes",
            description:
                "Lots of sites seem to have resizable panes these days. They're often used to show before and after photos with both images staying the same size as the user drags the bar to reveal more of one photo and less of the other.!",
            stack: "html, css, JavaScript, jQuery",
            webpage: "https://resizablepanes.netlify.app/",
            github: "https://github.com/RezaHajipour/resizable-panes",
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
