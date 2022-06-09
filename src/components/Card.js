import "../styles/Card.css";
import arrowIcon from "../images/arrow1.png";
import githubIcon from "../images/github-black.png";

export default function Card({
    imageUrl,
    title,
    description,
    stack,
    webpage,
    github,
}) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageUrl} alt="cardImage" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-description">{description}</p>
                <p className="card-stack">{stack}</p>
            </div>
            <div className="buttons">
                <a
                    href={webpage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardBtn"
                >
                    Webpage
                    <img src={arrowIcon} alt="cardIcon" className="cardIcon" />
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardBtn"
                >
                    Github
                    <img src={githubIcon} alt="cardIcon" className="cardIcon" />
                </a>
            </div>
        </div>
    );
}
