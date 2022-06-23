import "../styles/Contact.css";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

function Contact() {
    return (
        <div className="contact" id="contact">
            <form
                type="submit"
                className="form"
                method="post"
                action="https://getform.io/f/d4cc779f-c34c-4c9c-a0dd-d2e5485c7534"
            >
                <h1 className="contact-title">CONTACT ME</h1>
                <label for="Name" className="label">
                    NAME
                </label>

                <input type="text" id="name" name="name" className="name" />

                <label for="email" className="label">
                    EMAIL
                </label>

                <input type="email" id="email" name="email" className="email" />

                <label for="message" className="label">
                    MESSAGE
                </label>

                <textarea className="textarea" name="message" />

                <button className="submit-btn">SEND MESSAGE</button>
            </form>
            <article className="logo-container">
                <a href="https://www.linkedin.com/in/rezahajipour/">
                    <img src={linkedin} alt="linkedin" className="logo3" />
                </a>
                <a href="https://github.com/RezaHajipour">
                    <img src={github} alt="github" className="logo3" />
                </a>
                <a href=" https://www.instagram.com/invites/contact/?i=3mayw2xytmhu&utm_content=8g5604">
                    <img src={instagram} alt="instagram" className="logo3" />
                </a>
            </article>
        </div>
    );
}

export default Contact;
