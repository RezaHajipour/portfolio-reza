import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
