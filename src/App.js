import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
// import About from "./components/About";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Home />
        </div>
    );
};

export default App;
