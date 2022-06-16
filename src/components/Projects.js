import "../styles/Projects.css";
import Card from "./Card.js";

function Projects({ imageUrl, title, description, stack, webpage, github }) {
    const Works = [
        {
            id: 1,
            imageUrl: require("../images/portfolio.png"),
            title: "Portfolio",
            description: "This exact portfolio website!",
            stack: "html, css, JavaScript",
            webpage: "https://www.rezahajipour.com",
            github: "https://github.com/RezaHajipour/portfolio-reza",
        },
        {
            id: 2,
            imageUrl: require("../images/autowerkstatt-hammerbrook.png"),
            title: "Autowerkstatt Hammerbrook",
            description: "A Statistic Website for Auto repair.",
            stack: "html, css, JavaScript, Material UI",
            webpage: "https://autowerkstatt-hammerbrook.netlify.app/",
            github: "https://github.com/RezaHajipour/werkstatt",
        },
        {
            id: 3,
            imageUrl: require("../images/crewconnector.png"),
            title: "Crew Connector",
            description:
                "an App to connect film crews. User can register himself as a film crew or search other crews by name, city, title or category.",

            stack: "html, css, JavaScript, Postgres, Express, Node.js",
            webpage: "https://crewconnector.herokuapp.com/",
            github: "https://github.com/RezaHajipour/final_project",
        },
        {
            imageUrl: require("../images/portfolio.png"),
            title: "Title 1",
            description: "image 1 description",
            stack: "html, css, JavaScript",
            webpage: "https://www.youtube.com/watch?v=vbQ-WDVqOcA",
            github: "https://github.com/RezaHajipour/portfolio-reza",
        },
        {
            id: 4,
            imageUrl: require("../images/premier.png"),
            title: "THE PREMIER SHORT FILM",
            description:
                "This film was created as part of the 48 Hour Film Project ofLisbon, Portugal 2015. It was written, shot, and edited in 48 hours.  The genre assigned was Dark Comedy. ",
            stack: "html, css, JavaScript",
            webpage: "https://www.youtube.com/watch?v=vbQ-WDVqOcA",
            github: "https://github.com/RezaHajipour/portfolio-reza",
        },
        {
            id: 5,
            imageUrl: require("../images/crewconnector.png"),
            title: "Crew Connector",
            description:
                "Crew Connector is a App to connect Film and TV Crew. In this App users can either register themselves as a crew either search for a crew for their project. The search can be done by title, category or location.",
            stack: "html, css, JavaScript",
            webpage: "https://crewconnector.herokuapp.com/",
            github: "https://github.com/RezaHajipour/portfolio-reza",
        },
    ];
    return (
        <section className="projects-container">
            <h1 className="project-title">My Projects</h1>
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
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
