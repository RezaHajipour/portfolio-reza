import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <div className="App">
            <ScrollToTop />
            <Nav />
            <Home />
            <About />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
