import "../styles/Projects.css";
import click from "../images/arrow1.png";
import github from "../images/github-black.png";
// import portfolio from "../images/portfolio.png";

function Projects() {
    return (
        <div className="projects-container">
            <article className="container">
                <div className="heading">
                    <h1>RECENT WORK</h1>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <h1>React</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Culpa, recusandae! Lorem,
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Culpa, recusandae!Lorem, ipsum dolor sit
                                amet consectetur adipisicing elit.
                            </p>
                            <div className="buttons">
                                <a href="#" className="visit-btn">
                                    Visit Site
                                    <img
                                        src={click}
                                        alt="click-icon"
                                        className="click-icon"
                                    />
                                </a>
                                <a href="#" className="github-btn">
                                    Github
                                    <img
                                        src={github}
                                        alt="github-icon"
                                        className="click-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h1>Vue</h1>
                        </div>
                        <div className="card-body">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Culpa, recusandae!
                            </p>
                            <a href="#" className="btn">
                                Read more
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h1>Angular</h1>
                        </div>
                        <div className="card-body">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Culpa, recusandae!
                            </p>
                            <a href="#" className="btn">
                                Read more
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h1>JQuery</h1>
                        </div>
                        <div className="card-body">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Culpa, recusandae!
                            </p>
                            <a href="#" className="btn">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Projects;
