import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

// Redux
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme.isDarkMode ? "App dark-mode" : "App"} id="home">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
